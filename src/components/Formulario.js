import React, { useState } from 'react';
import Error from './Error';


const Formulario = () => {

const [palabra, guardarPalabra] = useState('');
const [error, guardarError] = useState(false);

const buscarImagenes = e => {
    e.preventDefault();

    // Validar
    if (palabra.trim() === '') {
        guardarError(true);
        return;
    }

    // Enviar el termino de búsqueda hacia el componente principal

}

    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: futbol o café"
                        onChange={ e => guardarPalabra(e.target.value)}

                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"

                    />
                </div>
            </div>

            { error ? <Error mensaje="Agrega una palabra para la búsqueda" /> : null }
        </form>
     );
}
 
export default Formulario;