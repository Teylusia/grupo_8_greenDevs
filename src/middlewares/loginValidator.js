const path = require('path');
const fs = require('fs')
const usersFilePath = path.join(__dirname, '../data/users.json');
const usersFile= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const bcryptjs = require("bcryptjs");

let loginValidator = {
    login: function(req, res){
        let users;
        if(usersFile == ""){
            users = [];
        } else{
            users = JSON.parse(usersFile)
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].email == req.body.email)
            res.send('exito')
        }
    }
}

module.exports = loginValidator;