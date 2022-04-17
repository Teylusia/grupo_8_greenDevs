const path = require('path');
const fs = require('fs')
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
  home:  (req, res)=>{
    res.render('index', {products:products})
    
  },

};

module.exports = controller;