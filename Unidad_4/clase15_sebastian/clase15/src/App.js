import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FormularioLogin from './componentes/FormularioLogin'
import Inicio from './componentes/Inicio'
import Sebas from './componentes/Sebas';
function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/">
          <Route index element={<FormularioLogin/>}/>
          <Route path= "inicio" element={<Inicio/>}/>
          <Route path= "sebas" element= {<Sebas/>}/>
        </Route> 
      </Routes> 
    </BrowserRouter>
  )
}

export default App;
