//User related routes here
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require("path");

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

//Middlewares, por ahora se valida desde el front
//const validateRegister = require('../middlewares/validateRegister.js');

//Register
router.get('/register', usersController.register);
router.post('/register', upload.single("avatar"), usersController.userAdd);

//Login
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess)

router.put('/user/:id', usersController.userEdit);
// router.delete('/user', usersController.userDelete); falta desarrollar la vista y el panel de usuarios
router.get("/admin", usersController.admin )


module.exports = router;