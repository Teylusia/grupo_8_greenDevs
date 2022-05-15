//User related routes here
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require("path");
const validateRegister = require("../middlewares/registerValidatorMiddleware")
const validateLogin = require("../middlewares/loginValidatorMiddleware")

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



//Register
router.get('/register', usersController.register);
router.post('/register', upload.single("avatar"),validateRegister, usersController.userAdd);

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
router.put('/edit/:id',upload.single("avatar"), usersController.userEdit)


module.exports = router;