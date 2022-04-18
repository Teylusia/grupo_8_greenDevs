//User related routes here

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { body } = require('express-validator')

router.get('/register', usersController.register);
router.post('/register', usersController.userAdd);
router.put('/user/:id', usersController.userEdit);
// router.delete('/user', usersController.userDelete);
router.get("/admin", usersController.admin )


module.exports = router;