import React, { useEffect, useState, useRef } from "react";
import './Home.css'
import buscando_prestador from './buscando_prestador.jpeg'
import {motion} from 'framer-motion'

import image1 from './encanador1.jpg'
import image2 from './pedreiro1.jpg'
import image3 from './pintor1.jpg'
import image4 from './enfermeira1.jpg'
import image5 from './advogado.jpg'
import image6 from './tec_de_inf.jpg'
import image7 from './faxineira.jpg'

 

const images = [image1, image2, image3, image4, image5, image6, image7]


const Home = () => {

    const carrossel = useRef();
    const [width, setWidth] = useState (0)

    useEffect(() => {
        console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    
        

    return (        
        <div className="home">
                <main>
                    <aside>
                            <h2>Está buscando um prestador de serviço<span> para sua casa ou empresa?</span></h2>
                            <h3>Aqui você encontra os melhores prestadores de serviços</h3>
                            <p>A Indique Alguém vai te conectar a profissionais das mais diversas áreas</p>

                                
                                <form className="caixa-form">                               
                                        
                                        <select required id="prestador" name="select"  className="select-prestador" >
                                            <option value=" " disabled selected>Prestador</option>
                                            <option value="Advogado">Advogado</option>
                                            <option value="Encanador">Encanador</option>
                                            <option value="Pedreiro">Pedreiro</option>
                                            <option value="Pintor">Pintor</option>
                                        </select> 
                                        
                                        <select id="cidades" name="select" className="select-cidade">
                                            <option value=" " disabled selected>Onde?</option>
                                            <option value="Bayeux">Bayeux</option>
                                            <option value="Cabedelo">Cabedelo</option>
                                            <option value="Conde">Conde</option>
                                            <option value="Joao Pessoa">João Pessoa</option>
                                        </select>                                      

                                        <input type="submit" value="Buscar >"/>                               
                                    
                                </form>  
                    </aside>

                            {/* <article className="img-home">                        
                                <img src={buscando_prestador} alt="busca_de_prestador"/>
                            </article>  */}

                </main>                

                             

                            <div className="carrossel" >

                                        <motion.div className="carousel" whileTap={{ cursor: "grabbing"}}>  
                                            <motion.div 
                                            className="inner"
                                                drag="x"
                                                dragConstraints={{ right: 0, left: -width }}
                                                initial={{ x: 100}}
                                                animate={{ x: 0}}
                                                transition={{duration: 0.8}}
                                            > 

                                                {images.map(image => (
                                                    <motion.div className="item" key={image}>
                                                        <img src={image} alt="Texto alt" />
                                                    </motion.div>                                               
                                                ))}

                                            </motion.div>
                                        </motion.div>
                                        
                                    </div>   

                                    

                                                       
        </div>
        
    )
    
    
}

export default Home