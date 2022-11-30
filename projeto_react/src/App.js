import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Menu from './components/menu/Menu'
import Rotas from './Routes';


function App() {
  return (    
  
      <BrowserRouter>   
         <Menu />         
         <Rotas />       
      </BrowserRouter>
    
    
  );
}

export default App;
