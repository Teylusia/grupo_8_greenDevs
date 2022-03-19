const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/mainController');

//Home
router.get('/', controller.home);

//Login
router.get('/login', controller.login);


module.exports = router;

