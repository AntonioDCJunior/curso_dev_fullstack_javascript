import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Inicio from './components/pages/Inicio';
import Profissionais from './components/pages/Profissionais';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import NewUsuario from './components/pages/NewUsuario';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

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
          <Route exact path='/newusuario' element={<NewUsuario />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
