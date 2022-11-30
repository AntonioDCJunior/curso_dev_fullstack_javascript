import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/Servicos">Serviços</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
                <li><Link to="/Contato">Contato</Link></li>
                <Link to="#" class="inscreva-se-btn"><li>Já tem uma conta?</li></Link>
            </ul>
        </nav>
    )
}

export default Nav