import CadastroForm from '../Cadastro/CadastroForm'

import styles from './NewUsuario.module.css'

function NewUsuario () {
    return (
        <div className={styles.newusuario_container}>
            <h1>Cadastro de Usuário</h1>
            <CadastroForm btnText="Criar usuário"/>
            
        </div>

    )
}

export default NewUsuario