module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        //preguntar si tengo que poner INTEGER o TINY integer,

        profilePicture: {
            type: dataTypes.STRING
        }

    };
    let config = { 
        timestamps: false};

    const Users = sequelize.define(alias, cols, config);

    return Users

};