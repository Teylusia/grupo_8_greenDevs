//User related routes here
const express = require('express');
const router = express.Router();
// const { check } = require('express-validator');
const usersController = require('../controllers/usersController');
const path = require("path");

const validateRegister = require("../middlewares/registerValidatorMiddleware")

//Multer
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'public/img/avatar')
  },
  filename: function (req, file, cb){
    cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });

// Middlewares, por ahora se valida desde el front
// Validations 
// const validateLogin = [
//   check('email')
//   .notEmpty().withMessage('necesitas completar tu email.').bail().isEmail()
//   .isLength({min: 6}).withMessage('debe tener un minimo de 6 caracteres y cumplir con el formato de email.'),
//   check('password')
//   .notEmpty().withMessage('necesitas completar con una contraseña.').bail()
//   .isLength({min: 5}).withMessage('debe tener un minimo de 5 caracteres')
// ];


//Register
router.get('/register', usersController.register);
// router.post('/register', upload.single("avatar"), validateRegister, usersController.userAdd);
router.post('/register', validateRegister, usersController.userAdd);

//Login
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess)

router.put('/user/:id', usersController.userEdit);
// router.delete('/user', usersController.userDelete); falta desarrollar la vista y el panel de usuarios
router.get("/admin", usersController.admin );

module.exports = router;