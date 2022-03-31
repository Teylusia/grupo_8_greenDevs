const path = require("path");
const fs = require("fs");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categoryFilePath = path.join(__dirname, "../data/category.json");
const category = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));



let productsController = {
  detail: (req, res) => {
    let productId = req.params.id
    let productObjet = products.find(el => el.id == productId)
    let screenshots = productObjet.short_screenshots 
    res.render("productDetail", { 
      product: productObjet,
      allProducts: products,
      screenshots: screenshots
    });
    
  },

  cart: (req, res) => {
    res.render("productCart", { products: products });
  },

  productCreate: (req, res) => {
    res.render("productAdd",{category});
  },
  productAdd: (req, res) => {
    let newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      specs: req.body.specs,
      desc: req.body.description,
      disc: req.body.discount,
      category: req.body.category
    };
    console.log(newProduct);
    products.push(newProduct);
    fs.appendFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/");
  },
  productEdit: (req, res) => {
    let productId = req.params.id
    
    res.render("productEdit", { products: products.find(el => el.id == productId)});
  },
  productEdited: (req, res) => {
    let productToEdit = req.params.id;
    let productEdited = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      discount: req.body.discount,
    };
    products.forEach((product) => {
      if (product.id == productToEdit) {
        product = productEdited;
      }
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect("/");
  },
  productDelete: (req,res) =>{
    let productToDelete = req.params.id
    products.filter(product =>{
     product.id != productToDelete
    })

    fs.writeFileSync(productsFilePath, JSON.stringify(products));
    res.redirect('/')
  }
};

module.exports = productsController;
