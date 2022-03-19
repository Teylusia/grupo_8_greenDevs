const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/mainController');
const multer = require('multer');
const moduleMulter = require('../modules/modules');
const upload = multer({ storage: moduleMulter });
const usersController = require('../controllers/usersController');


//Home
router.get('/', controller.home);

//Login
router.get('/login', controller.login);


//Cart
router.get('/productcart', controller.cart);

//Detail
router.get('/product/:id', controller.detail);

router.get('/products/edit/:id', controller.productEdit);
router.put('/products/edit/:id', controller.productEdited)


//Create Products
router.get('/products/create', controller.productCreate);
router.post('/', upload.any(), controller.productAdd);

//Users
router.get('/register', usersController.register);
router.post('/register', upload.any(), usersController.userAdd);


module.exports = router;

