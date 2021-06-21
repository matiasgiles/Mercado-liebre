
const path = require('path');

const userController ={
    
    login(req, res){
    res.render("login.ejs")
},
    userRegister(req, res){
        res.render('register.ejs')
    }

}


module.exports= userController