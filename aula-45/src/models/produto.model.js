const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    descricao: String,
    preco: { type: String, required: true },
});

module.exports = mongoose.model('Produto', produtoSchema)
module.exports = mongoose.model('Preco', produtoSchema)
