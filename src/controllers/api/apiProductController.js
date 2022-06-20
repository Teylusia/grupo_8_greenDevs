const db = require("../../database/models");

const productsControllerApi = {
  list: (req, res) => {
    let CAT = db.Category.findAll({
      include: { association: "Product_Category" },
    });

    let products = db.Product.findAll({
      include: { association: "Product_Category" },
    });

    let accion = db.Product_Category.count({
      where: { category_id: 1 },
    });

    let deportes = db.Product_Category.count({
      where: { category_id: 2 },
    });

    let rpg = db.Product_Category.count({
      where: { category_id: 3 },
    });

    let indie = db.Product_Category.count({
      where: { category_id: 4 },
    });

    let aventura = db.Product_Category.count({
      where: { category_id: 5 },
    });

    let estrategia = db.Product_Category.count({
      where: { category_id: 6 },
    });

    let fps = db.Product_Category.count({
      where: { category_id: 7 },
    });

    let casual = db.Product_Category.count({
      where: { category_id: 8 },
    });

    let plataforma = db.Product_Category.count({
      where: { category_id: 9 },
    });

    let simulacion = db.Product_Category.count({
      where: { category_id: 10 },
    });

    let arcade = db.Product_Category.count({
      where: { category_id: 11 },
    });

    let pelea = db.Product_Category.count({
      where: { category_id: 12 },
    });

    Promise.all([
      products,
      accion,
      deportes,
      rpg,
      indie,
      aventura,
      estrategia,
      fps,
      casual,
      plataforma,
      simulacion,
      arcade,
      pelea,
      CAT,
    ]).then(
      ([
        products,
        accion,
        deportes,
        rpg,
        indie,
        aventura,
        estrategia,
        fps,
        casual,
        plataforma,
        simulacion,
        arcade,
        pelea,
        CAT,
      ]) => {
        return res.status(200).json({
          categories: CAT,
          CAT: CAT.length,
          count: products.length,
          countByCategory: [
            { nombre: "Accion", cantidad: accion },
            { nombre: "Deportes", cantidad: deportes },
            { nombre: "Rpg", cantidad: rpg },
            { nombre: "Indie", cantidad: indie },
            { nombre: "Aventura", cantidad: aventura },
            { nombre: "Estrategia", cantidad: estrategia },
            { nombre: "Fps", cantidad: fps },
            { nombre: "Casual", cantidad: casual },
            { nombre: "Plataforma", cantidad: plataforma },
            { nombre: "Simulacion", cantidad: simulacion },
            { nombre: "Arcade", cantidad: arcade },
            { nombre: "Pelea", cantidad: pelea },
          ],
          products: products.map((product) => {
            return {
              id: product.id,
              name: product.name,
              description: product.description,
              categories: product.Product_Category.map((category) => {
                return { category: category.category_id };
              }),
              detail: "/product/detail/" + `${product.id}`,
            };
          }),
        });
      }
    );
  },

  detail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: [
        { association: "Sale" },
        { association: "Image" },
        { association: "Product_Category" },
      ],
    }).then((product) => {
      res.json({
        product,
        productImgUrl: `${product.image}`,
      });
    });
  },

  
  sales: (req, res) => {
    db.Sale.findAll()
    .then((sales) => {
      res.json({
        sales
      })
    })
  }
};

module.exports = productsControllerApi;
