const fs = require('fs');
const path = require('path');


module.exports= {
    database: path.resolve(__dirname, '../data/products.json'),
    readFile() {
        // esta es mi primer funcion fundamental, la idea es que me permite leer la base de datos

        // 1) le marco la ruta
        const productPath = this.database;
        // 2) lo leo
        const productJson = fs.readFileSync(productPath, 'utf-8');
        // 3) Parseo (paso de json a obj lit)
        return JSON.parse(productJson);
    },

    //AHORA VAMOS CON LOS QUE SE ENCARGAN DE BUSCAR INFORMACION EN MI BASE DE DATOS

    findAll() {
        //hace lo mismo que readfile.
        const products = this.readFile();
        // devolver la info
        return products;
    },
    findByPk(id) {
        const products = this.readFile();
        // Filtrar por el ID
        const requiredProduct = products.find(product => product.id == id);
        // Recorre el array de objetos literales 
        //retorna el producto/usuario
        return requiredProduct;
        //la variable id viene del CONTROLADOR
    },

    findByField(field, value) {
        const products = this.readFile();
        // Filtrar por el [field]

        // [] los usamos para que sea dinámica el nombre de la propiedad
        const productFound = products.find(product => product[field] == value);
        // Devolvemos producto/usuario con toda la info
        return productFound;
        //la variable field viene del CONTROLADOR

        // notar que find by field es como una version mejorada de findByPk, es mas, podria no usar findByPk.
    },


// ACA TERMINAN LOS QUE SE ENCARGAN DE BUSCAR INFO EN MI BASE DE DATOS.

// VAMOS CON LOS QUE MODIFICAN LA BASE DE DATOS:

//esta funcion es la Reina, es la que me permite recibir nueva data y escribir el archivo.
    writeFile(newData) {
        //la new data viene de los siguientes metodos (delete, edit, create)
        // Pasar la data a json
        const dataJson = JSON.stringify(newData, null, 2);
        // Escribir el archivo
        fs.writeFileSync(this.filename, dataJson);
    },

// VAMOS CON EL PRIMER METODO MODIFICATIVO: DELETE

    delete(id) {
        // El id viene del controlador
        const products = this.readFile();

        const newproducts = products.filter(product => product.id != id);
        
        this.writeFile(newproducts);
        //esta ultima linea es la que le manda info a writefile
    
    },

// SEGUNDO METODO MODIFICATIVO: EDIT

        edit(data, id) {
            //vienen del controlador
            const products = this.readFile();

            const newProduct = products.map(product => {
                if(product.id == id){
                    product = {
                        id: product.id,
                        ...data
                    }
                }
                return product;
            });
            this.writeFile(newProduct);
        },

// TERCER METODO MODIFICATIVO: CREATE

//para este hay que implementar un paso anterior que es generar un nuevo id. (todo lo demas viene del formulario que llena el cliente)


        generateId() {
            const products = this.readFile();
            const lastElement = products.pop();
            return lastElement.id + 1;
        },

//una vez que ya tengo mi funcion generadora de id, hago la de crear

        create(product) {
            //utilizo la funcion de generar id
            product.id = this.generateId();

            // Leer el archivo
            const products = this.readFile();
            // Agregar nuestro planeta al array de planetas
            const updatedProducts = [...products, product];
            // Volver a escribir el archivo con el nuevo array de planetas
            this.writeFile(updatedProducts);
            return product;
        },

}