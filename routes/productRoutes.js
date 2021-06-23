const express = require('express')
const productRoutes = express()
const port= process.env.PORT || 3000;
const productController= require('../controller/productController')
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		let ruta = path.join(__dirname, '../public/images');
		console.log(ruta);
		cb(null, ruta);
	},
	filename: function (req, file, cb) {
		let imageName = Date.now();
		let extension = path.extname(file.originalname);
		let newName = imageName + extension;
		
		cb(null, newName);
	},
});
const upload = multer({ storage });


productRoutes.get("/catalogue", productController.catalogue)
productRoutes.get('/control', productController.controlPanel)



// Create
productRoutes.get("/create", productController.createProduct)
productRoutes.post('/create', productController.create)

// Edit
productRoutes.get('/edit/:id', productController.editProduct)
productRoutes.put('/:id',upload.single('Image'), productController.edit)
//falta repasar el update

// Delete
productRoutes.delete('/:id', productController.delete);




module.exports= productRoutes