import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo_ia.png'

import React from 'react';
import Modal from 'react-modal';
import Input from '../form/Input'
import LinkButton from '../layout/LinkButton';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(186, 225, 248)',
      // : 'rgb(40, 121, 168)',
    },
  };

function Navbar() {
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = 'rgb(40, 121, 168)';
      
    }
  
    function closeModal() {
      setIsOpen(false);
    }

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
      
                    <div>
                      <button className={styles.button_modal} onClick={openModal}>Login</button>

                      <Modal
                          isOpen={modalIsOpen}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >
                          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Bem Vindo ao Indique Alguém</h2>
                            <button className={styles.button_modal_close} onClick={closeModal}>X</button>
                          
                          <form className= {styles.form_modal}>
                              <label>
                                  <Input 
                                      type="text"
                                      text="E-mail"
                                      placeholder="E-mail"                    
                                  />
                                  <Input 
                                      type="text"
                                      text="Senha"
                                      placeholder="Senha"                    
                                  />
                                  <LinkButton text="Entrar" />
                              </label>
                                  
                                <div className={styles.criar_conta}>Ainda não tem uma conta? <LinkButton to="../newusuario" text="Clique aqui!" /></div>      
                          
                          </form>
                    </Modal>
                  </div>                                   
                </ul>                      
                    
          </Container>      
            
      </nav>
    )
}

export default Navbar