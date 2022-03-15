const path = require('path');
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let controller = {
  home:  (req, res)=>{
    res.render('index')
  },

  login: (req, res)=>{
    res.render('login');
  },

  register: (req, res)=>{
    res.render('register');
  },

  detail: (req, res)=>{
    res.render('productDetail');
  },

  cart: (req, res)=>{
    res.render('productCart');
  },

  productCreate: (req, res)=>{
    res.render('productAdd');
  },
  productAdd: (req, res)=>{
    let newProduct = req.body
    console.log(newProduct)
    products.push(newProduct);
    console.table(products);
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect('/');
  },
  productEdit: (req, res)=>{
    res.render('productEdit')
  },
  productEdited: (req, res)=>{
    productToEdit = req.params.id
    productEdited = req.body
    res.redirect('/')
  }
};

module.exports = controller;