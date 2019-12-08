/*Esto es una arrow function, 
si es una linea se escribe de esa forma. 
Sino, como una funcion normal con {} y 
; al final de cada sentencia

function WeatherLocation () {
    return (<div>*Weather Location*</div>);
}

Es exactamente igual a la funcion de arriba.*/
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={"Buenos Aires!"}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;
