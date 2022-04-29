const {body} = require("express-validator");


let validateLogin = [

    body("email")
    .notEmpty().withMessage("Tienes que escribir un email")
    .isEmail().withMessage("Tienes que escribir un email válido"),

    body("password").notEmpty().withMessage("Tienes que escribir una contraseña")

]
module.exports = validateLogin

