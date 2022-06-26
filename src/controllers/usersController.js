const path = require("path");
const fs = require("fs");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const { validationResult } = require("express-validator");
const deleteFile = require("../modules/deleteFile");
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
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    } else {
      if (req.file != undefined) {
        db.User.create({
          name: req.body.username,
          email: req.body.email,
          avatar: "/img/avatar/" + req.file.filename,
          password: bcryptjs.hashSync(req.body.password, 10),
          privilege: 0,
          status: 1,
        });
        res.redirect("/user/login");
      } else if (req.file == undefined) {
        User.create({
          name: req.body.username,
          email: req.body.email,
          avatar: "/img/avatar/default.jpg",
          password: bcryptjs.hashSync(req.body.password, 10),
          privilege: 0,
          status: 1,
        });
        res.redirect("/user/login");
      } else {
        res.redirect("/user/login");
      }
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
          if (userToLogin) {
            let okPassword = bcryptjs.compareSync(
              req.body.password,
              userToLogin.password
            );
            if (okPassword) {
              delete userToLogin.password;
              req.session.userLogged = userToLogin;
              if (req.body.rememberUser)
                res.cookie("userEmail", req.body.email, {
                  maxAge: 1000 * 60 * 10,
                });

              res.redirect("/user/profile");
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
    let userToEdit = req.params.id;
    let resultValidation = validationResult(req);
    let avatarDefault = "/img/avatar/default.jpg";
    console.log(req.body);
    console.log(resultValidation);
    let userInDb = db.User.findByPk(req.params.id).then(function (userInDb) {
      if (req.file != undefined && req.file.filename != avatarDefault) {
        deleteFile(userInDb.avatar);
      }

      if (resultValidation.errors.length > 0) {
        if (req.file != undefined && req.file.filename != avatarDefault) {
          deleteFile(userInDb.avatar);
        }
        res.render("userEdit", {
          usuario: userInDb,
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      } else {
        if (req.file != undefined) {
          User.update(
            {
              name: req.body.username,
              email: req.body.email,
              avatar: "/img/avatar/" + req.file.filename,
            },
            { where: { id: userToEdit } }
          )
            .then(() => {
              res.redirect("/user/profile");
            })

            .catch((error) => res.send(error));
        }
        if (req.file == undefined) {
          User.update(
            {
              name: req.body.username,
              email: req.body.email,
            },
            { where: { id: userToEdit } }
          )

            .then(() => {
              res.redirect("/user/profile");
            })

            .catch((error) => res.send(error));
        }
      }
    });
  },

  //GET
  deleteUser: (req, res) => {
    User.findByPk(req.params.id)
      .then((user) => {
        res.render("userDelete", { usuario: user });
      })
      .catch((error) => res.send(error));
  },

  //DELETE OR DISABLED
  userDelete: (req, res) => {
    let userId = req.params.id;
    let userLogin = req.session.userLogged;
    let userInDb = db.User.findByPk(userId)
      .then((user) => {
        if (userId != userLogin.id) {
          if (user.status == 1) {
            User.update(
              { status: 0 }, //deshabilita el usuario
              {
                where: { id: userId },
              }
            );
          } else {
            User.update(
              { status: 1 }, //habilita el usuario
              {
                where: { id: userId },
              }
            );
          }
        }
        //DELETE USUARIOS
        // let findFile = fs.existsSync(
        //   path.join(__dirname, "../../public/" + user.avatar)
        // );
        // //busca el archivo, si lo encuentra borra el mismo y el usuario de la db pero la ruta es el avatar por defecto no lo borra.
        // if (findFile && user.avatar != "/img/avatar/default.jpg") {
        //   fs.unlinkSync(path.join(__dirname, "../../public/" + user.avatar));
        //   User.destroy({ where: { id: userId }, force: true }).then(() => {
        //     return res.redirect("/admin/users");
        //   });
        // } else {
        //   //si no encuentra el archivo avatar borra solamente el usuario de la db
        //   User.destroy({ where: { id: userId }, force: true }).then(() => {
        //   });
        // }
      })
      .catch((error) => res.send(error));
    setTimeout(function () {
      return res.redirect("/admin/users");
    }, 1000);
  },

  //cambiar usuario a Admin
  adminSwitch: (req, res) => {
    let userId = req.params.id;
    let userLogin = req.session.userLogged;
    db.User.findByPk(userId)
      .then((user1) => {
        if (userId != userLogin.id) {
          if (user1.privilege == 1) {
            User.update(
              { privilege: 0 }, //cambia a usuario basico
              {
                where: { id: userId },
              }
            );
          } else {
            User.update(
              { privilege: 1 }, //cambia a usuario admin
              {
                where: { id: userId },
              }
            );
          }
        }
      })
      .catch((error) => res.send(error));
    setTimeout(function () {
      return res.redirect("/admin/users");
    }, 1000);
  },

  editShow: (req, res) => {
    User.findByPk(req.params.id).then((user) => {
      res.render("userEdit", { usuario: user });
    });
  },
  profile: (req, res) => {
    let userId = req.session.userLogged;
    let user = db.User.findByPk(userId.id);
    let sales = db.Sale.findAll(
      { where: { users_id: userId.id } },
      { include: [{ association: "User" }] }
    );
    Promise.all([user, sales]).then(([user, sales]) => {
      res.render("profile", {
        user: user,
        id: userId.id,
        sales,
      });
    });
  },

  //EDIT PASSWORD

  changePassword: (req, res) => {
    res.render("changePassword", {
      user: req.session.userLogged,
      id: req.session.userLogged.id,
    });
  },

  newPassword: (req, res) => {
    let password1 = req.body.newpassword;
    let password2 = req.body.confirmpassword;
    let toCompare = req.body.oldpassword;
    let user = req.session.userLogged;

    User.findOne({ where: { id: user.id } }).then((userFound) => {
      let oldPassword = userFound.password;
      console.log(oldPassword);

      let oldPasswordValidation = bcryptjs.compareSync(toCompare, oldPassword);

      if (oldPasswordValidation && password1 == password2) {
        User.update(
          {
            password: bcryptjs.hashSync(password2, 10),
          },
          { where: { id: user.id } }
        );
        res.redirect("/user/logout");
      }
    });
  },

  //LOGOUT

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    return res.redirect("/");
  },
};

module.exports = usersController;
