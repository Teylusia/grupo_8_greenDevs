const {body} = require("express-validator");
const path = require ("path");


let validateProduct = [

 body("name")
 .notEmpty().withMessage("Ingresar nombre del producto")
 .isLength({ min: 5, max: 100}).withMessage("El nombre debe tener más de 5 caracteres") ,
 body("price").notEmpty().withMessage("Ingresar precio"),
 body("specs").notEmpty().withMessage("Ingresar requisitos"),
 body("description")
 .notEmpty().withMessage("Ingresar detalle")
 .isLength({ min: 20}).withMessage("Debe tener más de 20 caracteres"),
 body('image')
 .custom((value, { req }) => {
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    if (req.files["image"] == undefined) {
        return true;        
    }else{
      
      let file = req.files["image"][0];
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
      }
    } 
    return true;
}),
body("gallery")
.custom((value, { req }) => {
    if (req.files["gallery"] == undefined) {
        return true
    }else{
        let file = req.files["gallery"];
        
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        for (let i = 0; i < file.length; i++) {
            
            let fileExtension = path.extname(file[i].originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
  
            }
        }
        return true;
        
        
    } 
),

body("discount")
.isLength({ max: 2}).withMessage("Debe tener ser menor a 100")
]
module.exports = validateProduct

