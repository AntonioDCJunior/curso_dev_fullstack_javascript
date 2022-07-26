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