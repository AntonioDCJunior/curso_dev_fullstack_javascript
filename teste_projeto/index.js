const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => { 
    res.render('inicio')
})

app.get("/cliente", (req, res) => { 
    res.render('cliente')
})

app.get("/prestador.ejs", (req, res) => { 
    res.render('prestador')
})

app.get("/searchPrestador", (req, res) => { 
    res.render('searchPrestador')
})

app.get("/advogado.ejs", (req, res) => { 
    res.render('advogado')
})








app.listen(PORT, () => console.log('api deu certo!'))

