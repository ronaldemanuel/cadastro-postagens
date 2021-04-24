const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Connection with Mysql Data Base
        const sequelize = new Sequelize('cadastro_postagens', 'root', 'ronald123', {
            host: "localhost",
            dialect: "mysql"
        })

app.listen(3000, () => {
    console.log('Servidor rodando na url https://localhost:3000')
})

