module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: dataTypes.STRING
        }
   

    };
    let config = { 
        timestamps: false};

    const Category = sequelize.define(alias, cols, config);

    return Category

};