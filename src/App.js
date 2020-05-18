import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';

function App() {

// State de la App
const [ busqueda, guardarBusqueda ] = useState('');

useEffect(() => {
  if (busqueda === '') return;

  const imagenesPorpagina = 30;
  const key = '16608388-a7a65b8c57d66f929e5c109af';
  const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page`;

}, [busqueda])

  return ( 
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
   );
}

export default App;
