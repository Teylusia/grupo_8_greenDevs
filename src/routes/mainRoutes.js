const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/mainController');
const multer = require('multer')
const moduleMulter = require('../modules/modules')
const upload = multer({ storage: moduleMulter })


//Home
router.get('/', controller.home);

//Login
router.get('/login', controller.login);

//Register
router.get('/register', controller.register);

//Cart
router.get('/productcart', controller.cart);

//Detail
router.get('/product/:id', controller.detail);

router.get('/products/edit/:id', controller.productEdit);
router.put('/products/edit/:id', controller.productEdited)


//Create Products
router.get('/products/create', controller.productCreate);
router.post('/', upload.any(), controller.productAdd);

module.exports = router;

