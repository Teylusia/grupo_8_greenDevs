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
router.get("/edit/:id", productsController.productToEdit);
router.put("/edit/:id",multerProduct.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), productsController.productEdited);

//Delete
router.delete("/delete/:id", productsController.productDelete);

//Create Products
router.get('/create', productsController.productCreate);
router.post('/create', multerProduct.single("image"), validateProduct, productsController.productAdd);

//Image
router.get('/image/:id', productsController.image)
router.delete('/image/:id', productsController.imageDelete)
module.exports = router;
