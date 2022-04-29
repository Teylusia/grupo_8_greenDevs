const path = require("path");
const fs = require("fs");
const { setTimeout } = require("timers/promises");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const categoryFilePath = path.join(__dirname, "../data/category.json");
const category = JSON.parse(fs.readFileSync(categoryFilePath, "utf-8"));
const { validationResult } = require("express-validator");

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
    let resultValidation = validationResult(req);
    console.log(req.body)
    console.log(resultValidation)
    if (resultValidation.errors.length > 0) {
      res.render("productAdd", { errors: resultValidation.mapped(), 
        oldData: req.body,
        category
      });
    }else{

      let maxId = 0;
      let findMaxId = products.forEach((product) => {
        if (product.id > maxId) {
          maxId = product.id;
        }
      });
      let newProduct = {
        id: maxId + 1,
        name: req.body.name,
        price: req.body.price,
        image: "/img/uploads/" + req.file.filename,
        specs: req.body.specs,
        description: req.body.description,
        discount: req.body.discount,
        category: req.body.category,
        rating: 0,
        short_screenshots: [],
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products));
      res.redirect("/admin");

    }
  },
  productEdit: (req, res) => {
    let productId = req.params.id;
    let productObjet = products.find((el) => el.id == productId);
    let screenshots = productObjet.short_screenshots;

    res.render("productEdit", {
      products: products.find((el) => el.id == productId),
      screenshots: screenshots,
    });
  },
  productEdited: (req, res) => {
    let productId = req.params.id;
    let productObjet = products.find((el) => el.id == productId);
    let screenshots = productObjet.short_screenshots;
    let newProducts = [];
    let productsFilter = (newProducts = products.filter(
      (el) => el.id != productId
    ));
    let productToEdit = products.find((el) => el.id == productId);
    let resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      res.render("productEdit", { errors: resultValidation.mapped(), 
        category,
        products: products.find((el) => el.id == productId),
      screenshots: screenshots,
      });
    }else{

    // console.log(newProducts)

    let productEdited = {
      id: productToEdit.id,
      name: req.body.name,
      price: req.body.price,
      // image: "/img/uploads/"+req.file.filename,
      specs: req.body.specs,
      description: req.body.description,
      discount: req.body.discount,
      category: req.body.category,
      rating: productToEdit.rating,
      short_screenshots: productToEdit.short_screenshots,
    };
    console.log(req.file);
    let renewProduct = newProducts.push(productEdited);

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts));
    res.redirect("/admin");
  }},
  productDelete: (req, res) => {
    let productId = req.params.id;
    let otherProducts = products.filter((product) => product.id != productId);
    // console.log(otherProducts)
    fs.writeFileSync(productsFilePath, JSON.stringify(otherProducts));
    res.redirect("/admin");
  },
};

module.exports = productsController;
