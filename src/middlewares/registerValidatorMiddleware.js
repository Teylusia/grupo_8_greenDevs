const {body} = require("express-validator")

let validateRegister = [
    body("username")
    .notEmpty().withMessage("Tienes que completar el nombre")
    .isLength({ min: 2, max: 30}).withMessage("El nombre debe tener entre 2 y 30 caracteres") ,

    body("email")
    .notEmpty().withMessage("Tienes que escribir un email")
    .isEmail().withMessage("Tienes que escribir un email válido"),

    body("password").notEmpty().withMessage("Tienes que escribir una contraseña")
    .isLength({ min: 8 }).withMessage("Tienes que escribir una contraseña con más de 8 caracteres")

]
module.exports = validateRegister

//     body("username")
//     .isAlpha()
//     .withMessage("El nombre sólo puede contener caracteres válidos"),

//     body("email").notEmpty().withMessage("Tienes que escribir un email"),
//     body("email").isEmail().withMessage("Tienes que escribir un email válido"),


// ]