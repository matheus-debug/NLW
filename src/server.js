
//Importar a biblioteca
const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path')
const pages = require('./server.js')
// Iniciando a biblioteca express
const server = express()

server

//utilizando os arquivos estaticos
.use(express.static('public'))

//configurar o template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criar uma rota
.get('/', pages.index () => {
  
})
//O que estiver entre '/' indica a rota da minha página que desejo acessar
 
//Ligar o servidor
server.listen(5500)