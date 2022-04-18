const express = require('express');
const router = express.Router(); 
const { check } = require('express-validator');
const mainController = require('../controllers/mainController');

//Validations 
const validateLogin = [
  check('username')
  .notEmpty().withMessage('necesitas completar tu nombre de usuario.').bail()
  .isLength({min: 6}).withMessage('debe tener un minimo de 6 caracteres.'),
  check('password')
  .notEmpty().withMessage('necesitas completar con una contraseña.').bail()
  .isLength({min: 5}).withMessage('debe tener un minimo de 5 caracteres')
];


//Home
router.get('/', mainController.home);

//Login
router.get('/login', mainController.login);
router.post('/login', validateLogin, mainController.loggedIn);


module.exports = router;

