var moment = require('moment')
var dataAtual = moment().format('DD/MM/YYY')
console.log = (dataAtual)

var moduloInstalado = require('axios');
axios.get('/user?ID=12345')
    .then(function(response){
        console.log(response);        
})