const express = require('express')
const productRoutes = express()
const port= process.env.PORT || 3000;
const productController= require('../controller/productController')
const path = require('path');

productRoutes.get("/", productController.catalogue)
productRoutes.get("/register", productController.productRegister)



module.exports= productRoutes