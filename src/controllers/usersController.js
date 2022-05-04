const path = require('path');
const fs = require('fs')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const bcryptjs = require('bcryptjs');
const db = require('../database/models');


let usersController = {



    /* ESTA RUTA SE MUDÓ A PRODUCTS ROUTES, PORQUE TIENE UN LISTADO DE PRODUCTOS
    
    admin: (req, res) => {
      res.render("admin", {products:products,})
    },
    
    */

    search: (req, res) => {
      let search = req.params.search;
      let resultado = [];

      for (let i= 0; i < products.length; i++){
        if(products[i].name.contains(search)){
          resultado.push(products[i])
        }
      }

    },

    //REGISTRO
    register: (req, res) => {
        res.render('register')
      },
    
      userAdd: (req, res)=>{

        db.User.create({
          name: req.body.username,
          email: req.body.email,
          avatar: "/img/avatar/" + req.file.filename,
          password: bcryptjs.hashSync(req.body.password, 10)
        });
        res.redirect("/login");
      },

      //LOGIN
      login: (req, res)=>{
        res.render('login');
      },

      loginProcess: (req, res) => {
        db.User.findOne({where:{email: req.body.email}}, {
          include: [{association:"Sale"}]
        }).then((resultado) => {
          let userToLogin = resultado.password;
          if(userToLogin){
            let okPassword = bcryptjs.compareSync(req.body.password, userToLogin)
            if(okPassword){
              //return res.send('Login exitoso!!!')
              res.redirect('/')
            }
          }
        }).catch(function(error){
          console.log(error);
        });

      },

      userEdit: (req, res)=>{
        let productToEdit = req.params.id
       User.update({
         name: req.body.name,
         email: req.body.email,
         avatar: req.body.avatar,
         password: req.body.password,    
       },
       {where:{id: productToEdit}})
       .then(()=>{
         res.render('/admin')
       })
       .catch(error => res.send(error))
     },

     userDelete: (req,res) => {
      let userId = req.params.id;
      User.destroy({where: {id: userId}, force: true})
          .then(()=>{
            return res.redirect('/admin')
          })
          .catch(error => res.send(error))
    },
    profile:(req, res) =>{
      res.render('profile')
    }
};

module.exports = usersController;
