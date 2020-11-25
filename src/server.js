
//Importar a biblioteca
const express = require('express');
const path = require('path')
// Iniciando a biblioteca express
const server = express()

server

//utilizando os arquivos estaticos
.use(express.static('public'))
//Criar uma rota
//O que estiver entre '/' indica a rota da minha página que desejo acessar
.get('/', (request, response) => {
 return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//Ligar o servidor
server.listen(5500)