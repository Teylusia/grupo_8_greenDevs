function adminMiddleware(req,res,next){
    if(req.session.userLogged){
        if(req.session.userLogged.privilege == 0){
            return res.redirect('/');
        }
    } else if (!req.session.userLogged){
            return res.redirect('/');
        }
    next();
}

module.exports = adminMiddleware;