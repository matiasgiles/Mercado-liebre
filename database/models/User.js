module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        //preguntar si tengo que poner INTEGER o TINY integer,

        profile_picture: {
            type: dataTypes.STRING
        },
        birth_date: {
            type: dataTypes.DATE
        },
        user_type: {
            type: dataTypes.STRING
        },
        adress: {
            type: dataTypes.STRING
        },

        alias: {
            type: dataTypes.STRING
        }

    };
    let config = { 
        timestamps: false};

    const Users = sequelize.define(alias, cols, config);

    return Users

};