function CNH(idade){
    switch (idade) {
        case idade > 17:
            console.log("Você pode dirigir")  ;          
            break; 
    
        default:
            console.log("Desculpe você nao pode dirigir")
            break;
    }
}

CNH(39);

// function verificarSeTemFruta(frutas){
//     if (frutas === "Laranja"){
//         return "Temos 10 laranjas"
// }
//     else if (frutas === "Morango"){
//         return "Temos 10 bandejas de morango"
// }
//     else if (frutas === "Manga"){
//         return "Temos 2 laranjas"
// } else
//     return "Não temos essa fruta disponível"

// }

// console.log(verificarSeTemFruta("Morango"))
// console.log(verificarSeTemFruta("abacate"))


// function podeTirarCNH (idade){
//     switch (idade) {
//         case (idade < 17) :
//         console.log("Pode dirigir");
//         break;

//         default:
//         console.log("Você não pode dirigir!")
//         break;
//     }
// }

// podeTirarCNH(10)