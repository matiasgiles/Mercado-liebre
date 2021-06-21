const path = require('path');

const productController ={

 catalogue(req, res){
    res.render("home.ejs")
},
productRegister(req, res){
    res.render('productRegister.ejs')
},



}


module.exports= productController