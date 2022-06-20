const express = require('express');
const router = express.Router(); 
const mainController = require('../controllers/mainController');
const adminMiddleware = require("../middlewares/adminMiddleware")

//Home
router.get('/', mainController.home);

//admin Users
router.get("/admin", adminMiddleware, mainController.admin);
router.get('/admin/search', adminMiddleware, mainController.adminSearch);
router.get('/admin/users', adminMiddleware, mainController.panel);
router.get('/admin/users/search', adminMiddleware, mainController.panelSearch)

//search bar
router.get('/result', mainController.searchFunction)
module.exports = router;

