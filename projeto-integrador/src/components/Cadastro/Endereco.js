import React, {useState} from 'react'
// import { useForm } from 'react-hook-form'
import styles from './Endereco.module.css'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import LinkButton from '../layout/LinkButton'


function Endereco ({btnText}) {

    const [cep, setCep] = useState ('')

    // const checkCEP = (e) => {
    //     const cep = e.target.value.replace(/\D/g, '')
    //     console.log(cep)
    //     fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //         .then(res => res.json()).then(data => {
    //             console.log(data)
    //         setValue('address', data.logradouro)
    //         setValue('neighborhood', data.neighborhood)
    //         setValue('city', data.localidade)
    //         setValue('state', data.uf)
    //     })
        

    // }

    function handleChangeCep (e) {
        setCep(cepMask(e.target.value))
    }

    function cepMask (value) {
        return value
        .replace(/\D+/g, '')
    }

    return (

        <form className={styles.form_endereco}>
            <Input 
                type="text"
                text="CEP"
                placeholder="00000000"
                // id="cep"
                // {...register("cep")}
                // onBlur={checkCEP}
                value={cep}
                onChange={handleChangeCep}
            />


            <Input 
                type="text"
                text="Rua"
                // id="address"
                // {...register("address")}
            />


            <Input 
            type="text"
            text="Bairro"
            // id="neighborhood"
            // {...register("neighborhood")}
            />


            <Input 
            type="text"
            text="Cidade"
            // id="city"
            // {...register("city")}
            />


            <Input 
            type="text"
            text="Estado"
            // id="uf"
            // {...register("uf")}
            />

        <LinkButton to="/cadastrofinalizado" text="Finalizar" />
            

</form>

    )
}

    
    

    
export default Endereco