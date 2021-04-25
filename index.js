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
    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
            res.render('home', {posts: posts})
        })
    })

    app.get('/cadastro', (req, res) => {
        res.render('formulario')
    })

    app.post('/enviar', (req, res) => {
        Post.create({
            titulo: req.body.title,
            conteudo: req.body.content
        }).then(() => {
            res.redirect('/')
        }).catch((error) => {
            res.send('Houve um erro: ' + error)
        })
    })

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({
            where: {
                'id': req.params.id
            }
        }).then(() => {
            res.redirect('/')
        }).catch((error) => {
            res.send('post não encontrado')
        })
    })

app.listen(3000, () => {
    console.log('Servidor rodando na url https://localhost:3000')
})

