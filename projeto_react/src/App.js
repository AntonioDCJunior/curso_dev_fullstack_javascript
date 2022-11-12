import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Nav from './components/Nav';

function App() {
  return (
    
    <>
      <BrowserRouter>   
      <Nav />   
          <Routes>
            <Route path='/' index element={<Home />} />            
            <Route path='/servicos'index element={<Servicos />} />
            <Route path='/sobre' index element={<Sobre />} />
            <Route path='/contato' index element={<Contato />} />
          </Routes>
      </BrowserRouter>
      <p>Projeto desenvolvido por Antonio Júnior e Pedro Henrique</p>
    </>
    
  );
}

export default App;
