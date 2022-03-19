//User related routes here

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');


router.get('/register', usersController.register);
router.post('/register', usersController.userAdd);


module.exports = router;