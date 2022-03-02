const express = require('express');
const router = express.Router();

const controller = require('../controllers/mainController');

router.get('/', controller.home);
router.get('/login', controller.login);
router.get('/productcart', controller.cart);
router.get('/productdetail', controller.detail);
router.get('/register', controller.register);
router.get('/productAdd', controller.productAdd);

module.exports = router;

