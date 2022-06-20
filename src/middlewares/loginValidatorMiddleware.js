const {body} = require("express-validator");
const db = require("../database/models");


let validateLogin = [

    body("email")
    .notEmpty().withMessage("Tienes que escribir un email").bail()
    .isEmail().withMessage("Tienes que escribir un email válido").bail()
    .custom(async(value, {req}) => {

		const user = await db.User.findOne({
			where: {
				email: req.body.email
		}});
		
		if(user != undefined && user.status == 0){
			throw new Error('Usuario dado de baja')

		}

	}).bail()
    ,

    body("password").notEmpty().withMessage("Tienes que escribir una contraseña")

]
module.exports = validateLogin

