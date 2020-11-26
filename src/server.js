
//Importar a biblioteca
const express = require('express');
const path = require('path')
// Iniciando a biblioteca express
const server = express()

server

//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar o template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
//Criar uma rota

//O que estiver entre '/' indica a rota da minha página que desejo acessar
.get('/', (request, response) => {
 return response.render('index')
 
})

//Ligar o servidor
server.listen(5500)