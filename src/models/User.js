//Este archivo corresponde a un DB basado en JSON

const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users= JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = {
    getData: function(){
        return users;
    },

      //FindAll regresa JSON con todos los usuarios
  findAll: function(){
    return users;
  },

/*FindByField busca usuario por el parametro que se le asigne y el texto a buscar
 (ej: nombre, email, id)*/
  findByField: function(field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
  },
    
}

module.exports = User;