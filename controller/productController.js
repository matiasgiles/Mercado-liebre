const path = require('path');

let db = require('../database/models')

const productController ={

// POR UN LADO LOS QUE SE COMUNICAN DIRECTAMENTE CON LAS VISTAS.
 catalogue: async(req, res) =>{
     const products= await db.Products.findAll();
    res.render("catalogue.ejs",{products})
},
createProduct(req, res){
    res.render('createProduct.ejs')
},

editProduct: async(req, res)=>{

    const product = await db.Products.findByPk(req.params.id)
    res.render('edit.ejs', {product} )
},

controlPanel: async(req, res)=>{
    const products= await db.Products.findAll();
res.render('controlPanel.ejs', {products})
},
 



// Ahora vamos a encargarnos de mandarle la nueva informacion que puso el cliente en los formularios a los modelos MODIIFICATIVOS


//DELETE 

delete: (req, res) => {
    
    const id = req.params.id;
    db.Products.destroy({where :{id:id}})

    res.redirect('/products/catalogue');
},

// EDIT


edit: (req, res) => {
    //aca viene lo que puso el usuario en el for
    const { id } = req.params;
  
    //averiguar

// ahora viene la imagen
// const unEditedProduct= db.Products.findbyPk(id)

// const { file } = req;
// let image;

// if (file) {
//     image = file.filename;
// } else {
//     image = unEditedProduct.image;
// }
// data.image = image;
db.Products.update({
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,  
},{where: {id: id}})

    res.redirect('/products/catalogue');
},


// CREATE

    create: (req, res) => {

        db.Products.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            
        })
        res.redirect('/products/catalogue');
        
		// const { filename } = req.file;
		// //es req.file porque lo manda por mullter

		// image = filename;

	},


}


module.exports= productController