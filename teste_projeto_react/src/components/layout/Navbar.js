import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo_ia.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="indique_alguem"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Início</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/profissionais'>Profissionais</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/sobre'>Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>   
                    <li className={styles.item}>
                        <Link to='#'>Login</Link>
                    </li>   
                                   
                </ul>  
            </Container>      
      </nav>
    )
}

export default Navbar