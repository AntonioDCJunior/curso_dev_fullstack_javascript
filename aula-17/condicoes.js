function podeTirarCNH(idade){

    if (idade > 17 && idade <= 74){
        console.log("pode tirar cnh")
    } else if (idade >= 75) {
        console.log("não recomendado tirar CNH")
    } else
        console.log("você não pode tirar CNH")
}
podeTirarCNH(35)
podeTirarCNH(80)
podeTirarCNH(10)