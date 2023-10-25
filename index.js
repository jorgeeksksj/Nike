const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const login = require('./models/Login');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.get('/login.html', function(req, res) {
    res.sendFile(__dirname + '/src/login.html');
});

app.get('/confirmation', function(req, res) {
    res.sendFile(__dirname + '/confirmation.html');
});


app.post('/Login', function(req, res) {
    login.create({
        nome: req.body.nome,
        senha: req.body.senha
    }).then(function() {
        res.redirect('/confirmacao.html'); // Redirecionar para a página de confirmação
    }).catch(function(erro) {
        res.send('Erro: O cadastro não foi feito com sucesso');
    });
});

app.listen(8080, function() {
    console.log('O servidor foi iniciado com sucesso: http://localhost:8080');
});
