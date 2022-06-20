const {body} = require("express-validator");
const path = require("path")
const db = require("../database/models");


let validateRegister = [
    body("username")
    .notEmpty().withMessage("Tienes que completar el nombre")
    .isLength({ min: 2, max: 30}).withMessage("El nombre debe tener entre 2 y 30 caracteres") 
	.custom(async(value, {req}) => {

		const userName = await db.User.findOne({
			where: {
				name: req.body.username
		}});
		
		if(userName){
			throw new Error('Usuario ya existente')

		}

	})
	,

    body("email")
    .notEmpty().withMessage("Tienes que escribir un email")
    .isEmail().withMessage("Tienes que escribir un email válido")
	.custom(async(value, {req}) => {

		const userEmail = await db.User.findOne({
			where: {
				email: req.body.email
		}});
		
		if(userEmail){
			throw new Error('Dirección de correo existente')

		}

	})
	,

    body("password").notEmpty().withMessage("Tienes que escribir una contraseña")
    .isLength({ min: 8 }).withMessage("Tienes que escribir una contraseña de al menos 8 caracteres"),

	body("confirmpassword").notEmpty().withMessage("Tienes que escribir una contraseña")
    .isLength({ min: 8 }).withMessage("Tienes que escribir una contraseña de al menos 8 caracteres"),

	

    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
		
		if (file) {
			
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		} else {
			
		}

		return true;
	})

]
module.exports = validateRegister
