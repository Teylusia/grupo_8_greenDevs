const path = require('path');
const fs = require('fs')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


let usersController = {
    admin: (req, res) => {
      res.render("admin", {products:products,})
    },
    search: (req, res) => {
      let search = req.params.search;
      let resultado = [];

      for (let i= 0; i < products.length; i++){
        if(products[i].name.contains(search)){
          resultado.push(products[i])
        }
      }

    }
    ,
    register: (req, res) => {
        res.render('register')
      },
    
      userAdd: (req, res)=>{
        let newUser = req.body
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/');
    
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
     }
};

module.exports = usersController;