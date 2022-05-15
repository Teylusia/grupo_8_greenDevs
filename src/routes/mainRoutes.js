const express = require('express');
const router = express.Router(); 
const mainController = require('../controllers/mainController');

//Home
router.get('/', mainController.home);

//admin Users
router.get("/admin", mainController.admin);
router.get('/admin/users', mainController.panel)

module.exports = router;

