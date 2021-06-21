const express = require('express')
const userRoutes = express()
const port= process.env.PORT || 3000;
const userController= require('../controller/userController')

userRoutes.get("/login", userController.login)
userRoutes.get("/register", userController.userRegister)


module.exports= userRoutes