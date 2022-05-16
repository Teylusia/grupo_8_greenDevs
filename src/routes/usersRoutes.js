//User related routes here
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validateRegister = require("../middlewares/registerValidatorMiddleware")
const validateLogin = require("../middlewares/loginValidatorMiddleware")
const multerAvatar = require("../middlewares/multerAvatarMiddleware");



//Register
router.get('/register', usersController.register);
router.post('/register', multerAvatar.single("avatar"),validateRegister, usersController.userAdd);

//Login
router.get('/login', usersController.login);
router.post('/login', validateLogin, usersController.loginProcess)

//Profile
router.get('/profile/:id', usersController.profile);



  //Delete
router.get('/delete/:id', usersController.deleteUser)
router.delete('/delete/:id', usersController.userDelete)

  //Edit
router.get('/edit/:id', usersController.editShow)
router.put('/edit/:id',multerAvatar.single("avatar"), usersController.userEdit)


module.exports = router;