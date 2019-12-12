import React from 'react';
import PropTypes from 'prop-types';

//const Location = (props) => { -> Forma normal
//Props es un objeto con todas las propiedades que reciba esta funcion
//El nombre que tendra es el de la llamada.
const Location = ({city}) => (//Destructuring al recibir 
    
    //const {city} = props; //Desructuring -> Ecmascript
    // Es igual a -> const city = props.city;
    <div>
        <h1>
            {city}
        </h1>
    </div>
    /*Como es una sola instruccion, se
    cierra la funcion con parentesis*/
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;