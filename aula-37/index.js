const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 3002

app.get('/', (req, res) => {
    res.send("Hello, Teste")
})

app.get('/usuarios', (req, res) => {
    axios.get('http://localhost:3001/usuarios').then((resposta) => {
        res.send(resposta.data)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    }).finally(() => {
        console.log("Finalmente terminamos essa promise!")
    })
})

app.get('/usuarios-await', async (req, res) => {
    try{
        const usuarios = await axios.get('http://localhost:3001/usuarios')
        res.send(usuarios.data)
    }catch(e) {
        console.log(e)
        res.send(e)
    }finally { //uso opcional
        console.log('Xuxinha')
    }
    

})

app.get('/personagens', (req, res)=> {
    axios.get('https://swapi.dev/api/people').then((response)=>{
        res.send(response.data)
    })
})


app.listen(PORT, ()=>{
    console.log(`Deu certo! ${PORT}`)
})