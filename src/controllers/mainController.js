const path = require('path');
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require('express-validator')

let controller = {
  home:  (req, res)=>{
    res.render('index', {products:products})
    
  },

  login: (req, res)=>{
    res.render('login');
  },

  loggedIn: (req,res)=>{

    let errors = validationResult(req)
    if(errors.isEmpty()){
      res.redirect('profile');
    }else{
      res.render('login', {errors: errors.mapped(), old: req.body})
    }
  }
};

module.exports = controller;