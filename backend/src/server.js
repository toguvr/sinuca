const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://guto:wsde123@sinuca-tkaai.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = acessar query params(para filtros)
//query.params = acessar route params (para edicao, delete)
//query.body = acessar corpo da requisicao (para criacao e edicao)

app.use(express.json())
app.use(routes)

app.listen(3333)