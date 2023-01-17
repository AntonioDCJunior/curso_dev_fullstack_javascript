import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'
import LinkButton from '../layout/LinkButton';
// import React, {useState} from 'react'


// import Endereco from './Endereco'



//btnText
function CadastroForm ({}) {
    return (
       

        <form className={styles.form_cliente}>
            
                <Input 
                    type="text"
                    text="Nome"
                    placeholder="Nome Completo"
                    
                />

                {/* <input onChange={ (e) => setNome(e.target.value) } name="Nome" placeholder="Nome Completo" /> */}

                <Input 
                    type="number"
                    text="CPF"
                    placeholder="00000000000"
                />

                {/* <input onChange={ (e) => setCpf(e.target.value) } name="CPF" placeholder='00000000000' /> */}
                 
                <Input 
                    type="email"
                    text="Email"
                    placeholder="Email (opcional)"
                />  

                <Input  
                    type="tel"
                    text="Telefone"
                    placeholder="(00) 00000-0000"
                />     

                {/* <input onChange={ (e) => setTelefone(e.target.value) } name="Telefone" placeholder="(00) 00000-0000" /> */}

                <Input 
                    type="password"
                    text="Senha"
                    placeholder="Senha"
                />

                {/* <input onChange={ (e) => setSenha(e.target.value) } name="Senha" placeholder="Senha" /> */}

                <Input 
                    type="password"                    
                    placeholder="Repita a senha"
                /> 

                {/* <input onChange={ (e) => setEmail(e.target.value) } name="Email" placeholder="Email (opcional)" /> */}

                
                {/* <input onChange={ (e) => setEstado(e.target.value) } name="Estado" placeholder="Nome do Estado" /> */}

                

                {/* <input onChange={ (e) => setRepetirSenha(e.target.value) } name="RepetirSenha" placeholder="Repita a senha" />

                <input onChange={ (e) => setProfissao(e.target.value) } name="Profissao" placeholder="Profissao" /> */}

                
                 
                <Select name="category_id" text="Atividades"/> 

                <LinkButton to="/newendereco" text="Avançar" />
                
                 {/* <SubmitButton text={btnText}/> */}
                {/* <button onClick={(e) => cadastrarUsuario(e)}>Cadastrar</button> */}

            </form>
        
        
     )
}

export default CadastroForm