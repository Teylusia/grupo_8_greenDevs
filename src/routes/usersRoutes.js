//User related routes here
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const usersController = require('../controllers/usersController');
const path = require("path");

//Multer
const multer = require('multer');
const { route } = require('express/lib/application');
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'public/img/avatar')
  },
  filename: function (req, file, cb){
    cb(null, file.fieldname + "-" + Date.now()+ path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });

//Middlewares, por ahora se valida desde el front
//Validations 
const validateLogin = [
  check('email')
  .notEmpty().withMessage('necesitas completar tu email.').bail().isEmail()
  .isLength({min: 6}).withMessage('debe tener un minimo de 6 caracteres y cumplir con el formato de email.'),
  check('password')
  .notEmpty().withMessage('necesitas completar con una contraseña.').bail()
  .isLength({min: 5}).withMessage('debe tener un minimo de 5 caracteres')
];
//const validateRegister = require('../middlewares/validateRegister.js');

//Register
router.get('/register', usersController.register);
router.post('/register', upload.single("avatar"), usersController.userAdd);

//Login
router.get('/login', usersController.login);
router.post('/login', validateLogin, usersController.loginProcess)

//Profile
router.get('/profile/:id', usersController.profile);

//admin Users
router.get('/admin/users', usersController.panel)

  //Delete
router.get('/user/delete/:id', usersController.deleteUser)
router.delete('/users/delete/:id', usersController.userDelete)

  //Edit
router.get('/users/edit/:id', usersController.editShow)
router.put('/users/edit/:id',upload.single("avatar"), usersController.userEdit)


module.exports = router;