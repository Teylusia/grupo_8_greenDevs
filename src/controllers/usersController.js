const path = require('path');
const fs = require('fs')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const User = db.User

let usersController = {

    panel:(req, res)=>{
      User.findAll().then((users)=>{
        res.render('adminUsers',{usuarios: users })
      })
    },

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
        console.log(req.body)
       User.update({
         name: req.body.username,
         email: req.body.email,
         avatar: req.body.avatar,
         password: req.body.password,    
       },
       {where:{id: productToEdit}})
       .then(()=>{
         res.redirect('/admin/users')
       })
       .catch(error => res.send(error))
     },
    deleteUser: (req,res) =>{
      User.findByPk(req.params.id)
      .then((user)=>{ res.render('userDelete',{usuario: user})})
      .catch(error => res.send(error))
    },
     userDelete: (req,res) => {
      let userId = req.params.id;
      User.destroy({where: {id: userId}, force: true})
          .then(()=>{
            return res.redirect('/admin/users')
          })
          .catch(error => res.send(error))
    },
    editShow:(req, res)=>{
      User.findByPk(req.params.id)
      .then((user) =>{ res.render('userEdit', {usuario: user})})
    },
    profile:(req, res) =>{
      let userId = req.params.id
      User.findByPk(userId)
        .then(()=>{
          res.render('profile',{ products: products})
        })  
    }
};

module.exports = usersController;
