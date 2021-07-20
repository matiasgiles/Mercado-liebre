const path = require('path');
let db = require('../database/models')
const userController ={
    
    login(req, res){
    res.render("login.ejs")
},
    userRegister(req, res){
        res.render('register.ejs')
    },

    createUser(req, res){

       db.User.create(
           {
               first_name: req.body.first_name,
               last_name: req.body.last_name,
               password: req.body.password, 
               profile_picture: req.body.profile_picture,
               birth_date: req.body.birth_date,
               user_type: req.body.user_type,
               adress: req.body.adress,
               alias: req.body.alias,

           }
       )
        
        res.redirect("/")
    }

}




module.exports= userController