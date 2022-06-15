const express = require('express');
const router = express.Router();
const apiProducts = require('../controllers/api/apiProductController')


//Listado de Productos
router.get('/',apiProducts.list)
router.get("/products", apiProducts.products) //para pruebas

router.get('/:id',apiProducts.detail)


module.exports=router;