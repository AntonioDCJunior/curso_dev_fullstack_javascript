import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/product/CreateProduct'
import ListProducts from './pages/product/ListProduct'
import EditProduct from './pages/product/EditProduct'
import Pai from './pages/Pai'

function App() {
  return (
    <>
    <Pai name="pedrao" sobrenome="henrique" idade={30}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' index  element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/products/edit/:id' produto element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;