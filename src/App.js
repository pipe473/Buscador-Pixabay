import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

// State de la App
const [ busqueda, guardarBusqueda ] = useState('');
const [ imagenes, guardarImagenes ] = useState([]);
const [ paginaactual, guardarPaginaActual ] = useState(1);
const [ totalpaginas, guardarTotalPaginas ] = useState(5);

useEffect(() => {
  const consultarAPI = async () => {
      if (busqueda === '') return;

    const imagenesPorpagina = 30;
    const key = '16608388-a7a65b8c57d66f929e5c109af';
    const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorpagina}`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    guardarImagenes(resultado.hits);

    // Calcular el total de paginas
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorpagina );
    guardarTotalPaginas(calcularTotalPaginas);
    

  }
  consultarAPI();

}, [busqueda])


// Definir la página anterior
const paginaAnterior = () => {
  const nuevaPaginaActual = paginaactual - 1;

  if (nuevaPaginaActual === 0) return;

  guardarPaginaActual(nuevaPaginaActual);
  
}

// Definir la pagina siguiente
const paginaSiguiente = () => {
  const nuevaPaginaActual = paginaactual + 1;

  if (nuevaPaginaActual > totalpaginas) return;

  guardarPaginaActual(nuevaPaginaActual);
}

  return ( 
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
          <ListadoImagenes 
            imagenes={imagenes}
          />

          { (paginaactual === 1) ? null : (
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={paginaAnterior}
              >&laquo; Anterior </button>
          )}

            <button
              type="button"
              className="btn btn-info"
              onClick={paginaSiguiente}
              >Siguiente &raquo;</button>
      </div>
    </div>
   );
}

export default App;
