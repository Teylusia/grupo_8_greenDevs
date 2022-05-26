const path = require("path");
const fs = require("fs");
// const usersFilePath = path.join(__dirname, "../data/users.json");
// const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
// const productsFilePath = path.join(__dirname, "../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const User = db.User;
const products = db.Product.findAll();

let usersController = {
  search: (req, res) => {
    let search = req.params.search;
    let resultado = [];

    for (let i = 0; i < products.length; i++) {
      if (products[i].name.contains(search)) {
        resultado.push(products[i]);
      }
    }
  },

  //REGISTRO
  register: (req, res) => {
    res.render("register");
  },

  userAdd: (req, res) => {
    // console.log(req.body);
    let resultValidation = validationResult(req);
    // console.log(resultValidation);

    if (resultValidation.errors.length > 0) {
      res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      let userInDb = User.findAll({
        where: {
          name: req.body.username,
        },
      }).then((user) => {
        return user;
      });
      let emailInDb = db.User.findAll({
        where: {
          email: req.body.email,
        },
      }).then((email) => {
        return email;
      });

      Promise.all([userInDb, emailInDb])
        .then(function ([user, email]) {
          // console.log(email);
          // console.log(user);
          // console.log(req.file);
          if (user == "" && email == "" && req.file != undefined) {
            // console.log("crear usuario");
            db.User.create({
              name: req.body.username,
              email: req.body.email,
              avatar: "/img/avatar/" + req.file.filename,
              password: bcryptjs.hashSync(req.body.password, 10),
            });
            res.redirect("/user/login");
          } else if (user == "" && email == "" && req.file == undefined) {
            // console.log("crear usuario con avatar por defecto");
            User.create({
              name: req.body.username,
              email: req.body.email,
              avatar: "/img/avatar/default.jpg",
              password: bcryptjs.hashSync(req.body.password, 10),
            });
            res.redirect("/user/login");
          } else {
            res.send("error usuario duplicado");
          }
        })
        .catch(function () {
          console.log("error en registro de usuario");
        });
    }
  },

  //LOGIN
  login: (req, res) => {
    res.render("login");
  },

  loginProcess: (req, res) => {
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("login", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      User.findOne({ where: { email: req.body.email } })
        .then((userToLogin) => {
          // let checkPassword = userToLogin;
          if (userToLogin) {
            let okPassword = bcryptjs.compareSync(
              req.body.password,
              userToLogin.password
            );
            if (okPassword) {
              delete userToLogin.password; //🚩ver por qué no está borrando el password
              req.session.userLogged = userToLogin;
              // res.redirect("/user/profile/"+userToLogin.id);
              if (req.body.rememberUser)
                res.cookie(
                  "userEmail",
                  req.body.email,
                  { maxAge: (1000 * 60) *10 } 
                );

              res.redirect("/user/profile");
              // res.send("login ok")
            } else {
              return res.render("login", {
                errors: {
                  password: {
                    msg: "Credenciales inválidas",
                  },
                },
              });
            }
          } else {
            return res.render("login", {
              errors: {
                password: {
                  msg: "Credenciales inválidas",
                },
              },
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },

  userEdit: (req, res) => {
    let productToEdit = req.params.id;
    // console.log(req.body);
    User.update(
      {
        name: req.body.username,
        email: req.body.email,
        avatar: req.body.avatar,
        password: req.body.password,
      },
      { where: { id: productToEdit } }
    )
      .then(() => {
        res.redirect("/admin/users");
      })
      .catch((error) => res.send(error));
  },
  deleteUser: (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        res.render("userDelete", { usuario: user });
      })
      .catch((error) => res.send(error));
  },
  userDelete: (req, res) => {
    let userId = req.params.id;
    let avatarDelete = db.User.findByPk(userId)
      .then((user) => {
        // console.log(user);
        let findFile = fs.existsSync(
          path.join(__dirname, "../../public/" + user.avatar)
        );
        //busca el archivo, si lo encuentra borra el mismo y el usuario de la db pero la ruta es el avatar por defecto no lo borra.
        if (findFile && user.avatar != "/img/avatar/default.jpg") {
          fs.unlinkSync(path.join(__dirname, "../../public/" + user.avatar));
          User.destroy({ where: { id: userId }, force: true }).then(() => {
            return res.redirect("/admin/users");
          });
        } else {
          //si no encuentra el archivo avatar borra solamente el usuario de la db
          User.destroy({ where: { id: userId }, force: true }).then(() => {
            return res.redirect("/admin/users");
          });
        }
      })
      .catch((error) => res.send(error));
  },
  editShow: (req, res) => {
    User.findByPk(req.params.id).then((user) => {
      res.render("userEdit", { usuario: user });
    });
  },
  profile: (req, res) => {
    console.log(req.session.userLogged.name)
    console.log(req.user);
    // let userId = req.params.id;
    // console.log(req.cookies.userEmail)

    // console.log(req.session.userLogged);
    // User.findByPk(userId).then((user) => {
    //   res.render("profile", {
    //     userToLogin: user });
    // });
    res.render("profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    return res.redirect("/");
  },
};

module.exports = usersController;
