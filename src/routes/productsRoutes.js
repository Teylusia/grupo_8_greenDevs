const express = require('express');
const router = express.Router(); 
const productsController = require('../controllers/productsController');
const multer = require('multer');
const moduleMulter = require('../modules/modules');
const { route } = require('./productsRoutes');
const upload = multer({ storage: moduleMulter });

//Cart
router.get('/productcart', productsController.cart);

//Detail
//router.get('/product/:id', productsController.detail);
router.get('/productDetail', productsController.detail); //Esta ruta permite ver el product detail

router.get('/products/edit/:id', productsController.productEdit);
router.put('/products/edit/:id', productsController.productEdited);
// router.delete('products/edit/:id', productsController.productDelete);


//Create Products
router.get('/products/create', productsController.productCreate);
router.post('/products/create', upload.any(), productsController.productAdd);

module.exports = router;
