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
       let productEdited = {
         id: productToEdit,
         name: req.body.name,
         price: req.body.price,
         image: req.body.image,
         discount: req.body.discount
       }
       for(let i = 0; i < users.length; i++){
         if( users[i].id == productToEdit){
           users[i] = productEdited
         }
       
       }
       fs.writeFileSync(usersFilePath, JSON.stringify(users));
       res.redirect('/');
     },

     userDelete: (req,res) => {
      let userId = req.params.id;
     let finalUsers = users.filter((user) => user.id != userId);
     fs.writeFileSync(productsFilePath, JSON.stringify(finalUsers));
}
};

module.exports = usersController;
