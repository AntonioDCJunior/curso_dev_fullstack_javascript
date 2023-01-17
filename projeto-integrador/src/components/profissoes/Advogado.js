import {Link} from 'react-router-dom'

import styles from './Advogado.module.css'
import LinkButton from '../layout/LinkButton'

function Advogado () {
    return (
        // <div className="main">
        //     <div className="mainBox1">            
                <form className={styles.form_advogado}>
                    
                    <div className={styles.imagemPerfiladv1}></div>
                    <div>
                        <label>Nome: </label>
                        <span>Luis Felipe.</span>
                    </div>
                    <div>
                        <label>Sexo: </label>
                        <span>Masculino.</span>
                    </div>
                    <div>
                        <label>Profissão: </label>
                        <span>Advogado.</span>
                    </div>
                    <div>
                    <label>Endereço: </label>
                        <span>Av Rui Carneiro, 980 - Tambaú - João Pessoa/PB.</span>
                    </div>

                    <div className={styles.contratar}>
                        <LinkButton to="/newusuario" text="Contratar" />                    
                    </div>
                    <div className={styles.mensagem}>
                        <LinkButton to="/newusuario" text="Mensagem" />
                    </div>

                    
                </form>

           
    )
}

export default Advogado