const express = require('express')
const app = express()
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()
const PORT = 3000

app.get('/', (req, res) => {

})

app.listen(3000, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})