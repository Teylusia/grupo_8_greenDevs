const express = require('express');
const router = express.Router(); 
const productsController = require('../controllers/productsController');
const { route } = require('./productsRoutes');
const multerProduct = require('../middlewares/multerProductMiddleware');
const validateProduct = require('../middlewares/productValidatorMiddleware');

 

//Cart
router.get("/cart", productsController.cart);

//Detail
router.get('/detail/:id', productsController.detail);

//Edit
router.get("/edit/:id", productsController.productEdit);
router.put("/edit/:id",multerProduct.single("image"), productsController.productEdited);

//Delete
router.delete("/delete/:id", productsController.productDelete);

//Create Products
router.get('/create', productsController.productCreate);
router.post('/create', multerProduct.single("image"), validateProduct, productsController.productAdd);

module.exports = router;
