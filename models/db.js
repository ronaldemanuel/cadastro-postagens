const {Sequelize, DataTypes} = require('sequelize')

// Connection with Mysql database
    const sequelize = new Sequelize('cadastro_postagens', 'root', 'ronald123', {
        host: "localhost",
        dialect: "mysql"
    })

module.exports = {
    sequelize: sequelize,
    DataTypes: DataTypes
}