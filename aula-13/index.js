var moment = require('moment')
var dataAtual = moment().format('DD/MM/YYYY')
console.log(dataAtual)

var data = document.getElementById("date")

function digaOla() {
    alert (data)
}