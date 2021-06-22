const express = require('express')
const productRoutes = express()
const port= process.env.PORT || 3000;
const productController= require('../controller/productController')


productRoutes.get("/catalogue", productController.catalogue)
productRoutes.get('/control', productController.controlPanel)



// Create
productRoutes.get("/create", productController.createProduct)
productRoutes.post('/create', productController.create)

// Edit
productRoutes.get(':id/edit', productController.editProduct)
productRoutes.put(':id', productController.edit)
//falta repasar el update

// Delete
productRoutes.delete('/:id', productController.delete);




module.exports= productRoutes