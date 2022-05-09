const {body} = require('express-validator');

let validateRegister = [
  body('username').notEmpty().withMessage('Completa el numbre').bail(),
  body('email').notEmpty().withMessage('Completa el email').bail().isEmail().withMessage('Por favor introduce un email valido'),
  body('avatar').notEmpty().withMessage('sube una foto'),
  body('password').notEmpty().withMessage('Completa la contraseña').bail().isLength({min: 6}).withMessage('contraseña debe tener al menos 6 caracteres').bail()
]

module.exports = validateRegister;