const series = [
    'Stranger',
    'Black List',
    'Brooklin 99',
    'Peaky Blinders'
]

// console.log(series[3])

//tanto o FILTER quanto o MAP devolve um ARRAY
const seriesEscolhida = series.filter((serie) => {
    return serie === 'Peaky Blinders'
})

console.log(seriesEscolhida)