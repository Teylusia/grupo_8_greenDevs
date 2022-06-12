const db = require("../../database/models");
const { validationResult } = require("express-validator");
// const Product_Category = require("../../database/models/Product_Category");
const products = db.Product.findAll();

const productsControllerApi = {
  list: (req, res) => {
    let products = db.Product.findAll(
       {include: { association: "Product_Category" }}
    )
    .then( products => {
      return res.status(200).json({

        count : products.length,
        // countByCategory :
      }
        )
    })

    // let Accion = db.Product_Category.count({
    //   where: { category_id: 1 },
    // });

    // let Deportes = db.Product_Category.count({
    //   where: { category_id: 2 },
    // });

    // let RPG = db.Product_Category.count({
    //   where: { category_id: 3 },
    // });

    // let response = {
    //   meta: {
    //     status: 200,
    //     url: "api/products",
    //   },
    //   count: products.length,
    //   countByCategory: [
    //     {Accion: Accion},
    //   ],
    //   products: products,
    // };
    // res.json(response);

  },
  // products: async (req.res) => {
  //   try {
  //     let products = await db.Product.  
      
  //   }
  // },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include:
      [
      // { association: "Sale" },
      // { association: "Image" },
      { association: "Product_Category" }
    ]
    }).then((product) => {
      res.json({
        product,
        productImgUrl: `${product.image}`

      }
        );
    });
  },
};

module.exports = productsControllerApi;
