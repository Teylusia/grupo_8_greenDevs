const path = require("path");
const fs = require("fs");
const { setTimeout } = require("timers/promises");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categoryFilePath = path.join(__dirname, "../data/category.json");
const category = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));
const db = require("../database/models");

let productsController = {

   detail: (req, res) => {
    let productId = req.params.id;
    let productObjet = products.find((el) => el.id == productId);
    let screenshots = productObjet.short_screenshots;
    res.render("productDetail", {
      product: productObjet,
      allProducts: products,
      screenshots: screenshots,
    });
  }, 

  cart: (req, res) => {
    res.render("productCart", { products: products });
  }, 

  productCreate: (req, res) => {
    res.render("productAdd", { category });
  },

  
  productAdd: (req, res) => {
    db.Product.create({
      name: req.body.name,
      price: req.body.price,
      specs: req.body.specs,
      description: req.body.description,
      //category: req.body.category,
      rating: req.body.rating,
      discount: req.body.discount
    }).then((product) => {
      db.Image.create({
        address: 'public/img/uploads/' + req.file.filename,
        product_id: product.id
      })
    });
    res.redirect("/admin");
    console.log(req.file)
  },
  
  productEdit: (req, res) => {

    let productAsked = db.Product.findOne({where: {id: req.params.id}},
      {include: [{association:"Sale"},
       {association:"Image"},
       {association:"Product_Category"}]})

    let imageAsked = db.Image.findOne({where:{product_id: req.params.id}},
        {include: [{association:"Product"}]})

    Promise.all([productAsked, imageAsked])
    .then(function([product, image]){
      if(product == undefined || image == undefined){
        res.render('page404');
      }else{
        res.render("productEdit", {product: product, image: image})}
    }).catch(function(e){
      console.log('algo anda mal')
    });
    
  },

  productEdited: (req, res) => {
    
      db.Product.update({
      name: req.body.name,
      price: req.body.price,
      specs: req.body.specs,
      description: req.body.description,
      category: req.body.category,
      discount: req.body.discount
    }, {
      where: {id: req.params.id}
    });

    db.Image.update({
      address: 'public/img/uploads/' + req.file.filename
    }, {
      where:{product_id: req.params.id}
    });

    res.redirect('/admin')
  },

  admin: (req, res) => {

    db.Product.findAll().then(function(productos) {
      res.render('admin', {productos})
    })

  },
 
  productDelete: (req, res) => {

    db.Product.destroy({where: {id: req.params.id}},
      {include: [{association: 'Image'}]});

    res.redirect('/admin')
  }

}


module.exports = productsController;
