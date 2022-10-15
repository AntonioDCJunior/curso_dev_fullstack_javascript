require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT;
const Produto = require('./models/produto.model')


app.use(express.json())

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('MongoDB conectado com sucesso!')
}).catch((e) => {
    console.log(e)
})


app.get('', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.post('/produtos', async (req, res) => {
    const produto = req.body
    const retorno = await ProdutoModel.produto.save(produto)
    console.log(produto)
    res.send('Produto foi cadastrado com sucesso')
})

app.get('/produtos', async (req, res) => {
    const produtos = await mongoose.Produto.find()
    res.send(produtos)
})

app.listen(PORT, () => {
    console.log('Serviço está sendo executado')
})