import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'
// import React, {useState} from 'react'


// import Endereco from './Endereco'



//btnText
function CadastroForm ({}) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [repetirsenha, setRepetirSenha] = useState('')
    const [profissao, setProfissao] = useState('')
    const navigate = useNavigate();

    const cadastrarUsuario = async (event) => {
        event.preventDefault()
        const usuario = {
            nome: nome,
            cpf: cpf,
            email: email,
            cep: cep,
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            telefone: telefone,
            senha:senha,
            repetirsenha: repetirsenha 
        }
        // const resposta = await axios.post('http://localhost:3306/teste_projeto_react', usuario)
        // if (resposta.status == 200) {
        //     navigate("/usuarios");
        // }
    }
    
// const {register, setValue} = useForm();

// const checkCEP = (e) => {
//     const cep = e.target.value.replace(/\D/g, '');
//     fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {console.log(data)
//         setValue('address', data.logradouro);
//         setValue('neighborhood', data.bairro);
//         setValue('city', data.localidade);
//         setValue('uf', data.uf);
// });   

// }


    return (
       

        <form className={styles.form_cliente}>
            
                {/* <Input 
                    type="text"
                    text="Nome"
                    placeholder="Nome Completo"
                    
                /> */}

                <input onChange={ (e) => setNome(e.target.value) } name="Nome" placeholder="Nome Completo" />

                {/* <Input 
                    type="number"
                    text="CPF"
                    placeholder="00000000000"
                /> */}

                <input onChange={ (e) => setCpf(e.target.value) } name="CPF" placeholder='00000000000' />
                 
                {/* <Input 
                    type="email"
                    text="Email"
                    placeholder="Email (opcional)"
                />    */}

                <input onChange={ (e) => setEmail(e.target.value) } name="Email" placeholder="Email (opcional)" />

                {/* <Input 
                    type="number"
                    text="CEP"
                    
                    placeholder="00000000"
                    id="cep"
                    
                /> */}

                <input onChange={ (e) => setCep(e.target.value) } name="Cep" placeholder="00000000" />

                {/* <Input 
                    type="text"
                    text="Rua"
                    
                    id="address"
                /> */}

                <input onChange={ (e) => setRua(e.target.value) } name="Rua" placeholder="Nome da Rua" />

                {/* <Input 
                    type="text"
                    
                    text="Bairro"
                    id="neighborhood"
                /> */}

                <input onChange={ (e) => setBairro(e.target.value) } name="Bairro" placeholder="Bairro" />

                {/* <Input 
                    type="text"
                    text="Cidade"
                    
                    id="city"
                /> */}

                <input onChange={ (e) => setCidade(e.target.value) } name="Cidade" placeholder="Nome da Cidade" />

                {/* <Input 
                    type="text"
                    text="Estado"
                    
                    id="uf"
                /> */}

                <input onChange={ (e) => setEstado(e.target.value) } name="Estado" placeholder="Nome do Estado" />

                {/* <Input  
                    type="tel"
                    text="Telefone"
                    placeholder="(00) 00000-0000"
                />      */}

                <input onChange={ (e) => setTelefone(e.target.value) } name="Telefone" placeholder="(00) 00000-0000" />

                {/* <Input 
                    type="password"
                    text="Senha"
                    placeholder="Senha"
                /> */}

                <input onChange={ (e) => setSenha(e.target.value) } name="Senha" placeholder="Senha" />

                {/* <Input 
                    type="password"                    
                    placeholder="Repita a senha"
                /> */}

                <input onChange={ (e) => setRepetirSenha(e.target.value) } name="RepetirSenha" placeholder="Repita a senha" />

                <input onChange={ (e) => setProfissao(e.target.value) } name="Profissao" placeholder="Profissao" />

                
                 
                {/* <Select name="category_id" text="Selecione a categoria"/>   */}
                
                {/* <SubmitButton text={btnText}/> */}
                <button onClick={(e) => cadastrarUsuario(e)}>Cadastrar</button>

            </form>
        
        
     )
}

export default CadastroForm