module.exports = (sequelize, dataTypes) => {

    const alias = "User"

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        lastname: {
            type: dataTypes.STRING(255)
        },
        username: {
            type: dataTypes.STRING(255)
        },
        email: {
            type: dataTypes.STRING(255)
        },
        password: {
            type: dataTypes.STRING(255)
        },
        gender: {
            type: dataTypes.STRING(30)
        },
        image: {
            type: dataTypes.STRING(255)
        },
        age: {
            type: dataTypes.STRING(4)
        },
        address: {
            type: dataTypes.STRING(255)
        },
        role: {
            type: dataTypes.STRING(100)
        }
    };

    const config = {
        tableName: "users",
        timestamps: false
    }
    const User = sequelize.define(alias,cols,config);

    return User;
}