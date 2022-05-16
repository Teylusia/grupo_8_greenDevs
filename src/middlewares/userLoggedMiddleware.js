const db = require("../database/models");
const User = db.User;

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;

    let userFromCookie 

    if(emailInCookie){
        userFromCookie =  User.findOne({where:{email:emailInCookie}}).then((result)=>{return result})
    }
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }

    console.log(userFromCookie)

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMiddleware

