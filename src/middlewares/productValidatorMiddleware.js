const {body} = require("express-validator");
const path = require ("path")

let validateProduct = [

 body("name").notEmpty().withMessage("Ingresar nombre del producto"),
 body("price").notEmpty().withMessage("Ingresar precio"),
 body("specs").notEmpty().withMessage("Ingresar requisitos"),
 body("description").notEmpty().withMessage("Ingresar detalle"),
 body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
    
    if (!file) {
        throw new Error('Tienes que subir una imagen');
    } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }

    return true;
})
]
module.exports = validateProduct

