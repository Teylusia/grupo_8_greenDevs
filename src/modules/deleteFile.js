const path = require("path");
const fs = require("fs");

function deleteFile (fileName) {
    let findFile = fs.existsSync(
        path.join(__dirname, "../../public/" + fileName)
      );
    if (findFile) {
        fs.unlinkSync(path.join(__dirname, "../../public/" + fileName));
    }  
}


module.exports = deleteFile