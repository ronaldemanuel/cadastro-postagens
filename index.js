const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post')

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())

// Rotas
    app.get('/cadastro', (req, res) => {
        res.render('formulario')
    })

    app.post('/enviar', (req, res) => {
        Post.create({
            titulo: req.body.title,
            conteudo: req.body.content
        }).then(() => {
            res.send('Post criado com sucesso')
        }).catch((error) => {
            res.send('Houve um erro: ' + error)
        })
    })

app.listen(3000, () => {
    console.log('Servidor rodando na url https://localhost:3000')
})

