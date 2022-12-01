import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contato from './pages/Contato/Contato'
import Servicos from './pages/Servicos/Servicos'
import Sobre from './pages/Sobre/Sobre'
import Profissoes from './pages/Profissoes/Profissoes'
import Cliente from './pages/Cadastrar/Cliente/Cliente'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/Home"  element={<Home />} /> 
            <Route path="/Profissoes"  element={<Profissoes />} />            
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre"  element={<Sobre />} />
            <Route path="/contato"  element={<Contato />} />
            <Route path="/Cliente"  element={<Cliente />} />
        </Routes>
    );
    
}

