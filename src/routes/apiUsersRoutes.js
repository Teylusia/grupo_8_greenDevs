const express = require('express');
const router = express.Router();
const apiUsers = require('../controllers/api/apiUserController')


//Listado de Productos
router.get('/',apiUsers.list)

router.get('/:id',apiUsers.detail)


module.exports=router;