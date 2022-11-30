import { useState } from "react";
import{Link} from "react-router-dom";
import Modal from "react-modal";
import './Menu.css'




const Menu = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <>
            
        
            <header id="container">
                <div id="title">           
                    <Link to="#"><h1>Indique</h1>
                                 <h1>Alguém</h1></Link>
                </div> 

                <nav>
                    <ul>
                        <li><Link to="/Home">Início</Link></li>
                        <li><Link to="/Profissoes">Profissões</Link></li>
                        <li><Link to="/Sobre">Sobre</Link></li>
                        <li><Link to="/Contato">Contato</Link></li>
                        <button onClick={openModal}><li>Já tem uma conta?</li></button>
                    </ul>
                </nav>              
            </header>
            
            <div className="container-modal">
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentlabel="Exemplo Modal"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                    >
                            <div className = "modal">
                                <button className="fechar">x</button>
                                    <h2 className="mainText">BEM-VINDO AO</h2>
                                    <h2 className="mainText2">INDIQUE ALGUÉM!</h2>
                                    <input type="checkbox" id="show"/>
                                        <Link to="#" className="show-btn">Cadastre-se</Link>

                                        <form action="#">
                                            <div className="data">
                                                <label>E-mail</label>
                                                <input type="email" required placeholder="E-mail" />
                                            </div>

                                            <div className="data">
                                                <label>Senha</label>
                                                <input type="password" required placeholder="Senha" />
                                            </div>

                                            <div className="forgot-pass">
                                                <Link to="#">Esqueceu a senha?</Link>
                                            </div>

                                            <div className="botton">
                                                <button className="show-btn">Entrar</button>
                                            </div>
                                        </form>
                            </div> 
                        </Modal>                       
                        
            </div>
            
            


            

        </>
    );
}

export default Menu