const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha!')
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    res.send(usuarios)
})

app.post('/usuarios', async (req, res) => {//CRUD = C R
    const data = req.body
    const resultado = await prisma.usuarios.create({data})
    if (resultado)
        res.status(201).send(resultado)
})

app.get('/usuarios/:id', async (req, res) => {//select * from usuarios where id = ?
    const id = parseInt(req.params.id)
    console.log(id)
    const resultado = await prisma.usuarios.findUnique({ where: {id} })
    if (resultado){
        res.status(200).send(resultado)
    }
    res.status(404).send(`Não encontramos nehum resultado para o id: ${id}`)
})

app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const resultado = await prisma.usuarios.delete({ where: {id} })
    if (resultado)
        res.send("O resgistro foi excluido com sucesso")
})

app.put('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    const resultado = await prisma.usuarios.update({ where: {id}, data })
    if (resultado){
        res.send(resultado)
    }
    res.status(404).send(`Não foi possível atualizar o resgistro !`)
})

app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})