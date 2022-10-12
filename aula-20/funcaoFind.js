const times = [
    'Viuvas de Pele',
    'Guarani da Capital',
    'Viuvas de Zico',
    'Vaxco',
    'Flamengo'
]

//busca realizada interna, assim não devolve outro ARRAY 
//e sim o próprio elemento solicitado
const mengao = times.find((time) => time === 'Flamengo')

console.log(mengao)