const path = require("path");
// const fs = require('fs')
// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const { validationResult } = require("express-validator");
const db = require("../database/models");


let controller = {
  home: (req, res) => {

    let products = db.Product.findAll(
      // {where: {id:1}},
      // {include: [{ association: "Image" }, { association: "Product_Category" }]}
      )
      .then(function (products) {
        // console.log(products);
        // console.table(images);
        res.render("index", { products });
      })
    
      .catch(function (error) {
        console.log(error);
      });
    
    

    // let images = db.Image.findOne({where: {id:1}})
    
    // db.Image.findOne(
    //   {where:{product_id: 1}},
    //   { include: [{ association: "Product" }] });

    // Promise.all([products, images])

    // let images = db.Image.findAll().then(function(images) {
    //   {include: [{association: 'Product'}]}
    // })
  },

  login: (req, res) => {
    res.render("login");
  },

  loggedIn: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      res.redirect("profile");
    } else {
      res.render("login", { errors: errors.mapped(), old: req.body });
    }
  },
  panel: (req, res) => {
    db.User.findAll().then((users) => {
      res.render("adminUsers", { usuarios: users });
    });
  },

  admin: (req, res) => {
    db.Product.findAll().then(function (productos) {
      res.render("admin", { productos });
    });
  },
};

module.exports = controller;
