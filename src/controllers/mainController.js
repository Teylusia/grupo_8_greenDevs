// const path = require('path'); ya no se requiere path

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
  }
};

module.exports = controller;