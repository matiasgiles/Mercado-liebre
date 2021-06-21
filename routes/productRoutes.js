const express = require('express')
const productRoutes = express()
const port= process.env.PORT || 3000;
const productController= require('../controller/productController')


productRoutes.get("/", productController.catalogue)

// Create
productRoutes.get("/create", productController.createProduct)
productRoutes.post('/create', productController.create)

// Update
productRoutes.get('id/edit', productController.editProduct)
productRoutes.put(':id', productController.edit)
//falta repasar el update

// Delete
planetsRoutes.delete('/:id', productController.delete);




module.exports= productRoutes