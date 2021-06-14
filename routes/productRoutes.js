const express = require('express')
const productRoutes = express()
const port= process.env.PORT || 3000;


productRoutes.get("/", productController.catalogue)


