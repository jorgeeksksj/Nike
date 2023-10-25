const Sequelize = require("sequelize");

const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

const db = require('./db');

db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem sucedida');
    })
    .catch((err) => {
        console.error('Erro na conexão com o banco de dados:', err);
    });
