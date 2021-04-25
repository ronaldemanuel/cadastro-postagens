const db = require('./db')

const Post = db.sequelize.define('Postagens', {
    titulo: {
        type: db.DataTypes.STRING
    },
    conteudo: {
        type: db.DataTypes.TEXT,
        allowNull: false
    }
})

// Post.sync({force: true})

module.exports = Post