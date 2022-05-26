const path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator");

let productsController = {
  detail: (req, res) => {
    let productDetail = db.Product.findOne(
      { where: { id: req.params.id } },
      {
        include: [
          { association: "Sale" },
          { association: "Image" },
          { association: "Product_Category" },
        ],
      }
    );

    let imageDetail = db.Image.findAll(
      { where: { product_id: req.params.id } },
      { include: [{ association: "Product" }] }
    );

    // let productId = req.params.id;
    // let productObjet = products.find((el) => el.id == productId);
    // let screenshots = productObjet.short_screenshots;
    Promise.all([productDetail, imageDetail]).then(function ([product, image]) {
      console.log(imageDetail);
      res.render("productDetail", {
        product,
        image,
      });

      // screenshots: screenshots,
    });
  },

  cart: (req, res) => {
    res.render("productCart", /* { products: products } */);
  },

  productCreate: (req, res) => {
    category = db.Category.findAll().then(function (category) {
      res.render("productAdd", { category });
    });
  },

  productAdd: (req, res) => {
    let resultValidation = validationResult(req);
    let category = db.Category.findAll().then((category) => {
      return category;
    });
    if (resultValidation.errors.length > 0) {
      console.log(resultValidation);
      category = db.Category.findAll().then(function (category) {
        res.render("productAdd", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          category,
        });
      });
    } else {
      console.log("crear producto");
      db.Product.create({
        name: req.body.name,
        price: req.body.price,
        specs: req.body.specs,
        description: req.body.description,
        rating: req.body.rating,
        discount: req.body.discount,
        image: req.file.filename,
      }).then(function () {
        res.redirect("/admin");
        //   console.log(req.file);
      });

      // .then((product) => {
      //   db.Image.create({
      //     address: '/img/uploads/' + req.file.filename,
      //     product_id: product.id
      //   })
      // });
    }
  },

  productToEdit: (req, res) => {
    let productAsked = db.Product.findOne(
      { where: { id: req.params.id } },
      {
        include: [
          { association: "Sale" },
          { association: "Image" },
          { association: "Product_Category" },
        ],
      }
    );

    let imageAsked = db.Image.findOne(
      { where: { product_id: req.params.id } },
      { include: [{ association: "Product" }] }
    );

    let images = db.Image.findAll(
      { where: { product_id: req.params.id } },
      { include: [{ association: "Product" }] }
    );

    Promise.all([productAsked, imageAsked, images])
      .then(function ([product, image, images]) {
        if (product == undefined || image == undefined) {
          res.render("page404");
        } else {
          res.render("productEdit", { product: product, image: image, images: images});
        }

        
      })
      .catch(function () {
        console.log("algo anda mal");
      });
  },

  productEdited: (req, res) => {
    // let image = req.file.filename;
    let productDetail = db.Product.findOne(
      { where: { id: req.params.id } },
      {
        include: [
          { association: "Image" },
          { association: "Product_Category" },
        ],
      }
    );

    let imageDetail = db.Image.findAll(
      { where: { product_id: req.params.id } },
      { include: [{ association: "Product" }] }
    );
    console.log(productDetail)
    console.log(imageDetail);

    Promise.all([productDetail, imageDetail]).then(function ([product, image]) {
      console.log(imageDetail);
      res.render("productDetail", {
        product,
        image,
      });
    })
    if (req.file == undefined) {
      
      db.Product.update({
        name: req.body.name,
        price: req.body.price,
        specs: req.body.specs,
        description: req.body.description,
        discount: req.body.discount,
        image: productDetail.address,
      });
      res.redirect("/product/edit/"+ req.body.id );
    } else {
      db.Product.update({
        name: req.body.name,
        price: req.body.price,
        specs: req.body.specs,
        description: req.body.description,
        discount: req.body.discount,
        image: "/img/uploads/" + req.file.filename,
      }),
        res.redirect("/admin");
    }
  },

  productDelete: (req, res) => {
    db.Product.destroy(
      { where: { id: req.params.id } },
      { include: [{ association: "Image" }] }
    );

    res.redirect("/admin");
  },
};

module.exports = productsController;
