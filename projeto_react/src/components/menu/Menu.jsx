import { useState } from "react";
import{Link} from "react-router-dom";
import Modal from "react-modal";
import './Menu.css'

Modal.setAppElement('#root')


const Menu = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',       
            background: 'rgb(40, 121, 168)',   
    }}
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
                        <button onClick={handleOpenModal}><li>Já tem uma conta?</li></button>
                    </ul>
                </nav>              
            </header>
            
            <div className="container-modal">
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    >
                            <div className = "modal">
                                <button onClick={handleCloseModal}>x</button>
                                    <h2 className="mainText">BEM-VINDO AO</h2>
                                    <h2 className="mainText2">INDIQUE ALGUÉM!</h2>
                                    <input type="checkbox" id="show"/>
                                        <Link to="#" className="show-btn">Cadastre-se</Link>

                                        <form action="#">
                                            <div className="data">
                                                <label>E-mail</label>
                                                <input type="email" required placeholder="E-mail" />
                                            </div>

                                            <div className="data1">
                                                <label>Senha</label>
                                                <input type="password" required placeholder="Senha" />
                                            </div>

                                            <div className="forgot-pass">
                                                <Link to="#">Esqueceu a senha?</Link>
                                            </div>

                                            <div className="botton">
                                                <button className="show-btn1">Entrar</button>
                                            </div>
                                        </form>
                            </div> 
                        </Modal>                       
                        
            </div>
            
            


            

        </>
    );
}

export default Menu