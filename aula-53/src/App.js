import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateProduct from './pages/product/CreateProduct'
import ListProducts from './pages/product/ListProducts'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/products" index element={<ListProducts  />} />        
          <Route path="/products/create" index element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>  
      <footer>Desenvolvido por Antonio Júnior</footer>
    </>  
  );
}

export default App;
