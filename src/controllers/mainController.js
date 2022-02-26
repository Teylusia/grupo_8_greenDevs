const path = require('path');

let controller = {
  home:  (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/index.html'))
  },

  login: (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/login.html'))
  },

  register: (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/register.html'))
  },

  detail: (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/productDetail.html'))
  },

  cart: (req, res)=>{
    res.sendFile(path.join(__dirname, '../views/productCart.html'))
  }
};

module.exports = controller;