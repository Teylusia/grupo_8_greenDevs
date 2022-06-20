const express = require('express');
const router = express.Router();
const apiProducts = require('../controllers/api/apiProductController')


//Listado de Productos
router.get('/',apiProducts.list)

router.get('/:id',apiProducts.detail)

router.get("/sales", apiProducts.sales)

module.exports=router;