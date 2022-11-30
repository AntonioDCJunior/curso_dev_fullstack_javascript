import { useState } from "react"


const CreateProduct = () => {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco, setPreco] = useState("")

    const cadastrarProduto = () => {
        prompt("Produto cadastrado com sucesso!")
    }

   

    const mudarTituloProduto = (event) => {
        if(event.targe.value != null) {
            setTitulo(event.target.value)
        }
    }


    return (
        <>
            <h1>Cadastrar Produto</h1>
            <div>
                <label>Nome:</label>
                <input type="text" name="titulo" placeholder="Nome do produto" value={titulo} onChange={(event) => mudarTituloProduto(event.target.value)} />
            </div>
            <div>
                <label>Descrição:</label>
                <input type="text" name="descricao" placeholder="Descrição do produto" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
            </div>
            <div>
                <label>Preço:</label>
                <input type="text" name="preco" placeholder="Preço do produto" value={preco} onChange={(event) => setPreco(event.target.value)}/>
            </div>
            <button onClick={() => cadastrarProduto()} >Cadastrar</button>
        </>
    )
}

export default CreateProduct


