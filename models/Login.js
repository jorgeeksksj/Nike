const db = require('./db');

const Login = db.sequelize.define('users', {
    nome: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.DOUBLE // Alterado para STRING
    }
});

module.exports = Login;
