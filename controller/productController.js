const path = require('path');
const productModel = require('../model/productModel')


const productController ={

// POR UN LADO LOS QUE SE COMUNICAN DIRECTAMENTE CON LAS VISTAS.
 catalogue(req, res){
     const products= productModel.findAll();
    res.render("catalogue.ejs",{products})
},
createProduct(req, res){
    res.render('createProduct.ejs')
},

editProduct(req, res){

    const product = productModel.findByPk(req.params.id)
    res.render('edit.ejs', {product} )
},

controlPanel(req, res){
    const products= productModel.findAll();
res.render('controlPanel.ejs', {products})
},
 



// Ahora vamos a encargarnos de mandarle la nueva informacion que puso el cliente en los formularios a los modelos MODIIFICATIVOS


//DELETE 

delete: (req, res) => {
    //averiguar
    const id = req.params.id;
    
    productModel.delete(id);

    res.redirect('/planets/list');
},

// EDIT


edit: (req, res) => {
    const data = req.body;
    //aca viene lo que puso el usuario en el form
    const { id } = req.params;
    //averiguar
    productModel.update(data, id);


    res.redirect('/products/catalogue');
},


// CREATE

    create: (req, res) => {
		const { filename } = req.file;
		//es req.file porque lo manda por mullter

		image = filename;

		const {
			name,
			price,
			discount,
		} = req.body;
		//es req.body porque lo manda por el body del formulario.

		const product = {
			name, //esto es lo mismo que name: name
            price,
			discount,
		};
        // aca genere este objeto que contiene toda la info que vino de mi formulario, y se la paso al modelo.

		const newProduct = productModel.create(product);

		res.redirect('/' + newProduct.id);
	},


}


module.exports= productController