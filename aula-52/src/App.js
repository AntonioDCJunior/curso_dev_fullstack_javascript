import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/Sobre" index element={<Sobre />} />
          <Route path="/Produtos" index element={<Produtos />} />        
        </Routes>
      </BrowserRouter>  
      <footer>Desenvolvido por Antonio Júnior</footer>
    </>  
  );
}

export default App;
