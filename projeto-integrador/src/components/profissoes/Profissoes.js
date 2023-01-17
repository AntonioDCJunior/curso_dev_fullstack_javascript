
import {Link} from 'react-router-dom'
import styles from "./Profissoes.module.css"
import Container from "../layout/Container"



function Profissoes () {
    return (      
                <div>
                    {/* <input type="text" id="site-search" text='Profissão' placeholder='Ex.: Pintor'/>
                            <button>Busca</button> */}

                    <Container>
                    
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <h1>A</h1>
                                <div>
                                    <Link to='/advogado'>Advogado</Link>
                                </div>
                                <div>
                                    <Link to='/analistadeti'>Analista de Ti</Link>
                                </div>
                                <div>
                                    <Link to='/arquiteto'>Arquiteto</Link>
                                </div>                            
                            </li>  

                            <li className={styles.item}>
                                <h1>B</h1>
                                <div>
                                    <Link to='/baba'>Babá</Link>
                                </div>
                                <div>
                                    <Link to='/barman'>Barman</Link>
                                </div>
                                <div>
                                    <Link to='/borracheiro'>Borracheiro</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>C</h1>
                                <div>
                                    <Link to='/carpiteiro'>Carpinteiro</Link>
                                </div>
                                <div>
                                    <Link to='/cozinheiro'>Cozinheiro</Link>
                                </div>
                                <div>
                                    <Link to='/contador'>Contador</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>D</h1>
                                <div>
                                    <Link to='/dentista'>Dentista</Link>
                                </div>
                                <div>
                                    <Link to='/designergrafico'>Desogner Gráfico</Link>
                                </div>
                                <div>
                                    <Link to='/doceira'>Doceira</Link>
                                </div>                            
                            </li>   

                            <li className={styles.item}>
                                <h1>E</h1>
                                <div>
                                    <Link to='/eletricista'>Eletricista</Link>
                                </div>
                                <div>
                                    <Link to='/encanador'>Encanador</Link>
                                </div>
                                <div>
                                    <Link to='/engenheiro'>Engenheiro</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>F</h1>
                                <div>
                                    <Link to='/faxineira'>Faxineira</Link>
                                </div>
                                <div>
                                    <Link to='/fisioterapeuta'>Fisioterapeuta</Link>
                                </div>
                                <div>
                                    <Link to='/frete'>Frete</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>G</h1>
                                <div>
                                    <Link to='/garcom'>Garçom</Link>
                                </div>
                                <div>
                                    <Link to='/gesseiro'>Gesseiro</Link>
                                </div>
                                <div>
                                    <Link to='/guiadeturismo'>Guia de Turismo</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>H</h1>
                                <div>
                                    <Link to='/historiador'>Historiador</Link>
                                </div>
                                <div>
                                    <Link to='/hospedagemparaanimal'>Hospedagem para Animal</Link>
                                </div>                                                           
                            </li>    

                            <li className={styles.item}>
                                <h1>I</h1>
                                <div>
                                    <Link to='/ilustrador'>Ilustrador</Link>
                                </div>
                                <div>
                                    <Link to='/influencerdigital'>Influencer Digital</Link>
                                </div>
                                <div>
                                    <Link to='/instrutordepilates'>Instrutor de Pilates</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>J</h1>
                                <div>
                                    <Link to='/jardinagem'>Jardinagem</Link>
                                </div>
                                <div>
                                    <Link to='/jornalista'>Jornalista</Link>
                                </div>                                                        
                            </li>    

                            <li className={styles.item}>
                                <h1>L</h1>
                                <div>
                                    <Link to='/lavadeira'>Lavadeira</Link>
                                </div>
                                <div>
                                    <Link to='/lavadordecarros'>Lavador de Carros</Link>
                                </div>
                                <div>
                                    <Link to='/limpezadepiscina'>Limpeza de Piscina</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>M</h1>
                                <div>
                                    <Link to='/manicure'>Manicure</Link>
                                </div>
                                <div>
                                    <Link to='/manobrista'>Manobrista</Link>
                                </div>
                                <div>
                                    <Link to='/montadordemoveis'>Montador de Móveis</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>N</h1>
                                <div>
                                    <Link to='/nutricionista'>Nutricionista</Link>
                                </div>                                                          
                            </li>    

                            <li className={styles.item}>
                                <h1>O</h1>
                                <div>
                                    <Link to='/opdecx'>Operador de Caixa</Link>
                                </div>
                                <div>
                                    <Link to='/opdeemp'>Operador de Empilhadeira</Link>
                                </div>
                                <div>
                                    <Link to='/ourives'>Ourives</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>P</h1>
                                <div>
                                    <Link to='/padeiro'>Padeiro</Link>
                                </div>
                                <div>
                                    <Link to='/pedreiro'>Pedreiro</Link>
                                </div>
                                <div>
                                    <Link to='/pintor'>Pintor</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>Q</h1>
                                <div>
                                    <Link to='/quiropraxista'>Quiropraxista</Link>
                                </div>                                                           
                            </li>    

                            <li className={styles.item}>
                                <h1>R</h1>
                                <div>
                                    <Link to='/recepcionista'>Recepcionista</Link>
                                </div>
                                <div>
                                    <Link to='/redator'>Redator</Link>
                                </div>
                                <div>
                                    <Link to='/repositor'>Repositor</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>S</h1>
                                <div>
                                    <Link to='/sanitizacao'>Sanitização</Link>
                                </div>
                                <div>
                                    <Link to='/seguranca'>Segurança</Link>
                                </div>
                                <div>
                                    <Link to='/serventedepedreiro'>Servente de Pedreiro</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>T</h1>
                                <div>
                                    <Link to='/tapeceiro'>Tapeceiro</Link>
                                </div>
                                <div>
                                    <Link to='/tatuagem'>Tatuagem</Link>
                                </div>
                                <div>
                                    <Link to='/tecdecel'>Técnico de Celular</Link>
                                </div>                            
                            </li>    

                            {/* <li className={styles.item}>
                                <h1>U</h1>
                                <div>
                                    <Link to='/baba'>Babá</Link>
                                </div>
                                <div>
                                    <Link to='/barman'>Barman</Link>
                                </div>
                                <div>
                                    <Link to='/borracheiro'>Boracheiro</Link>
                                </div>                            
                            </li>     */}

                            <li className={styles.item}>
                                <h1>V</h1>
                                <div>
                                    <Link to='/vendedor'>Vendedor</Link>
                                </div>
                                <div>
                                    <Link to='/veterinario'>Veterinário</Link>
                                </div>
                                <div>
                                    <Link to='/vigilante'>Vigilante</Link>
                                </div>                            
                            </li>    

                            <li className={styles.item}>
                                <h1>Y</h1>
                                <div>
                                    <Link to='/youtuber'>YouTuber</Link>
                                </div>                                                        
                            </li>    

                            <li className={styles.item}>
                                <h1>Z</h1>
                                <div>
                                    <Link to='/zelador'>Zelador</Link>
                                </div>                                                          
                            </li>                                                           
                        </ul>  
                    
                    </Container>

                  </div>      
        
        
    )
}

export default Profissoes