import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './CadastroForm.module.css'

function CadastroForm ({btnText}) {
    return (
        <form className={styles.form_cliente}>
                <Input 
                    type="text"
                    text="Nome"
                    placeholder="Nome Completo"
                />
                 
                <Input 
                    type="email"
                    text="Email"
                    placeholder="Email"
                />        
                <Input 
                    type="password"
                    text="Senha"
                    placeholder="Senha"
                />
                <Input 
                    type="password"                    
                    placeholder="Repita a senha"
                />
                <Input 
                    type="number"
                    text="CEP"
                    placeholder="00000-000"
                />
                <Input 
                    type="tel"
                    text="Telefone"
                    placeholder="(00) 00000-0000"
                />
                 
                <Select name="category_id" text="Selecione a categoria"/>  
                
                <SubmitButton text={btnText}/>

            </form>
        
        
    )
}

export default CadastroForm