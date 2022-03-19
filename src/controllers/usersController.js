const path = require('path');
const fs = require('fs')
const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let uController = {

    register: (req, res) => {
        res.render('register')
      },
    
      userAdd: (req, res)=>{
        let newUser = req.body
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect('/');
    
      }

};

module.exports = uController;