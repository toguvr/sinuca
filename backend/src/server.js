const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.Server(app)
const io = socketio(server)

io.on('connection', socket => {
    console.log('usuario conectado', socket.id)
    socket.on('omni', data=>{
        console.log(data)
      })
    socket.emit('hello', 'Msg do Back')


})


mongoose.connect('mongodb+srv://guto:guto@sinuca-tkaai.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//req.query = acessar query params(para filtros)
//query.params = acessar route params (para edicao, delete)
//query.body = acessar corpo da requisicao (para criacao e edicao)

app.use(express.json())
app.use(routes)

server.listen(3333)