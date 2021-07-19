module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        //preguntar si tengo que poner INTEGER o TINY integer,

        image: {
            type: dataTypes.STRING
        }

    };
    let config = { 
        timestamps: false};

    const Products = sequelize.define(alias, cols, config);

    return Products

};