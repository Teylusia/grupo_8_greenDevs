//User related routes here
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegister = require("../middlewares/registerValidatorMiddleware");
const validateLogin = require("../middlewares/loginValidatorMiddleware");
const multerAvatar = require("../middlewares/multerAvatarMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validateEdit = require('../middlewares/userEditValidatorMiddleware');



//Register
router.get("/register", guestMiddleware, usersController.register);
router.post("/register", multerAvatar.single("avatar"), validateRegister, usersController.userAdd
);


//Login
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", validateLogin, usersController.loginProcess);

//Profile
router.get("/profile", authMiddleware, usersController.profile);

//Delete
router.get("/delete/:id", usersController.deleteUser);
router.delete("/delete/:id", usersController.userDelete);

//Edit
router.get("/edit/:id",authMiddleware, usersController.editShow);
router.put("/edit/:id", multerAvatar.single("avatar"), validateEdit, usersController.userEdit);
router.patch("/edit/privilege/:id", usersController.adminSwitch)

//Edit - Password
router.get("/edit/password/:id", usersController.changePassword);
router.patch("/edit/password/:id", usersController.newPassword);

//Logout
router.get("/logout/", usersController.logout)

module.exports = router;
