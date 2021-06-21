const fs = require('fs');
const path = require('path');


module.exports= {
    database: path.resolve(__dirname, '../data/users.json'),
    readfile() {
        // esta es mi primer funcion fundamental, la idea es que me permite leer 

        //(y luego con otras, pero a partir de ella, editar) la base de datos.
        // 1) le marco la ruta
        const userPath = this.database;
        // 2) lo leo
        const usersJSON = fs.readFileSync(userPath, 'utf-8');
        // 3) Parseo (paso de json a obj lit)
        return JSON.parse(usersJSON);
    },

    //AHORA VAMOS CON LOS QUE SE ENCARGAN DE BUSCAR INFORMACION EN MI BASE DE DATOS

    findAll() {
        //hace lo mismo que readfile.
        const users = this.readFile();
        // devolver la info
        return users;
    },
    findByPk(id) {
        const users = this.readFile();
        // Filtrar por el ID
        const requiredUser = users.find(product => product.id == id);
        // Recorre el array de objetos literales 
        //retorna el producto/usuario
        return requiredUser;
        //la variable id viene del CONTROLADOR
    },

    findByField(field, value) {
        const users = this.readFile();
        // Filtrar por el [field]

        // [] los usamos para que sea dinámica el nombre de la propiedad
        const userFound = users.find(product => product[field] == value);
        // Devolvemos producto/usuario con toda la info
        return userFound;
        //la variable field viene del CONTROLADOR

        // notar que find by field es como una version mejorada de findByPk, es mas, podria no usar findByPk.
    },


// ACA TERMINAN LOS QUE SE ENCARGAN DE BUSCAR INFO EN MI BASE DE DATOS.



}