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

    Promise.all([productDetail, imageDetail]).then(function ([product, image]) {
      console.log(imageDetail);
      res.render("productDetail", {
        product,
        image,
      });

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
    
      category = db.Category.findAll().then(function (category) {
        res.render("productAdd", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          category,
        });
      });
    } else {
      let idLastProduct = db.Product.findAll({    attributes: [[sequelize.fn('MAX', sequelize.col('id')), 'maxId']] }).then((maxId) => {
        return maxId;
      });
      console.log("crear producto");
     // async function idLastProduct() {await db.product.max("id")
    //}
     console.log(idLastProduct);
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
      { where: { 
        id: req.params.id } },
      {
        include: [
          { association: "Sale" },
          { association: "Image" },
          { association: "Product_Category" },
        ],
      }
    );

    let imageAsked = db.Image.findOne(
      { where: { product_id: req.params.id,
      main : 1 } },
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
          res.cookie(
            "product_id",
            product.id,
            { maxAge: 0 } 
          );
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
    console.log(req.file);

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
      console.log(req.file)
      db.Product.update({
        name: req.body.name,
        price: req.body.price,
        specs: req.body.specs,
        description: req.body.description,
        discount: req.body.discount,
        // image: "/img/uploads/" + req.file.filename,
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

  image: (req, res) => {
     
    
    db.Image.findOne(
      { where: { id: req.params.id} }
      )
      
      .then((image) =>
      {
        console.log(image)
        res.cookie(
          "product_id",
          image.product_id,
          { maxAge: (1000 * 60) *10 } 
        );
        res.render("ProductImage", {image})
      }
    )
  },

  imageDelete: (req, res) => {
    let productId = req.cookies.product_id
    let deleteImage = db.Image.destroy(
      {where: { id: req.params.id}}
    )
    .then(function(image){
      res.redirect("/product/edit/"+ productId );
    })
  }
};

module.exports = productsController;
