const Sequelize = require('sequelize')

// Connection with Mysql database
    const sequelize = new Sequelize('cadastro_postagens', 'root', 'ronald123', {
        host: "localhost",
        dialect: "mysql"
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}