const express = require('express');
const router = express.Router(); 
const productsController = require('../controllers/productsController');
const { route } = require('./productsRoutes');
const multerProduct = require('../middlewares/multerProductMiddleware');
const validateProduct = require('../middlewares/productValidatorMiddleware');
const validateProductAdd = require('../middlewares/productAddValidatorMiddleware');
const adminMiddleware = require("../middlewares/adminMiddleware")

 

//Cart
router.get("/cart", productsController.cart);

//Detail
router.get('/detail/:id', productsController.detail);

//Edit
router.get("/edit/:id", adminMiddleware, productsController.productToEdit);
router.put("/edit/:id",multerProduct.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]), validateProduct, productsController.productEdited);

//Delete
router.delete("/delete/:id", productsController.productDelete);

//Create Products
router.get('/create',adminMiddleware, productsController.productCreate);
router.post('/create', multerProduct.single("image"), validateProductAdd, productsController.productAdd);

//Image
router.get('/image/:id', productsController.image)
router.delete('/image/:id', productsController.imageDelete)

//buy Items
router.get('/buying', productsController.showBuy)


module.exports = router;
