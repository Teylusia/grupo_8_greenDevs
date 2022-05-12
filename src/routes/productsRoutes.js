const express = require('express');
const router = express.Router(); 
const productsController = require('../controllers/productsController');
const { route } = require('./productsRoutes');
const path = require("path");
const sequelize = require("sequelize");

//Multer
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'public/img/uploads')
  },
  filename: function (req, file, cb){
    cb(null, file.fieldname+"-"+Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage });
 

//Cart
router.get("/cart", productsController.cart);

//Detail
router.get('/detail/:id', productsController.detail);

//Edit
router.get("/edit/:id", productsController.productEdit);
router.put("/edit/:id",upload.single("image"), productsController.productEdited);

//Delete
router.delete("/delete/:id", productsController.productDelete);

//Create Products
router.get('/create', productsController.productCreate);
router.post('/create', upload.single("image"), productsController.productAdd);

module.exports = router;
