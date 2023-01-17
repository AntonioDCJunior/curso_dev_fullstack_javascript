import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Inicio from './components/pages/Inicio'
import Profissionais from './components/pages/Profissionais';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NewContato from './components/pages/NewContato';
import NewUsuario from './components/pages/NewUsuario';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NewEndereco from './components/pages/NewEndereco';
import AnalistaDeTi from './components/profissoes/AnalistaDeTi';
import Arquiteto from './components/profissoes/Arquiteto';
import Advogado from './components/profissoes/Advogado';
import Baba from './components/profissoes/Baba';
import Barman from './components/profissoes/Barman';
import Borracheiro from './components/profissoes/Borracheiro';
import Modal from './components/pages/Modal';
import ModalLogin from './components/pages/Modal';

function App() {
  
    return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/profissionais' element={<Profissionais />} />
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/contato' element={<Contato />} />
          <Route exact path='/modallogin' element={<ModalLogin />} />
          <Route exact path='/newusuario' element={<NewUsuario />} />
          <Route exact path='/newendereco' element={<NewEndereco />} />
          <Route exact path='/newcontato' element={<NewContato />} />
          <Route exact path='/analistadeti' element={<AnalistaDeTi />} />
          <Route exact path='/arquiteto' element={<Arquiteto />} />
          <Route exact path='/advogado' element={<Advogado />} />
          <Route exact path='/baba' element={<Baba />} />
          <Route exact path='/barman' element={<Barman />} />
          <Route exact path='/borracheiro' element={<Borracheiro />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
