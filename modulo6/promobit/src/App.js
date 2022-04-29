import React from 'react';
import './App.css';
import Row from './components/Row';
import categorias from './api';
import Banner from './components/Banner';
import Navegacao from './components/Navegacao';


const App = () => {

  return(
    <div className='App'>
      <Navegacao/>
      <Banner/>
      {categorias.map((categorias)=>{
        return 
        <Row 
        key={categorias.name} 
        title={categorias.title} 
        path={categorias.path}
        isLarge={categorias.isLarge}
        />;
      })}
    </div>
  )
}


export default App;
