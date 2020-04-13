/*Esto es una arrow function, 
si es una linea se escribe de esa forma. 
Sino, como una funcion normal con {} y 
; al final de cada sentencia

function WeatherLocation () {
    return (<div>*Weather Location*</div>);
}

Es exactamente igual a la funcion de arriba.*/
import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { CircularProgress } from '@material-ui/core';

// const celcius = "&units=metric";
// const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
// componentWillMount() {
//     /*se ejecutara una vez en la vida del componente antes del render*/
    
//     const {city} = this.state;
//     const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api_key + celcius;        
//     fetch(api_weather).then(data => {

//         /*debugger; Breakpoint */
//         return data.json();

//     }).then(weather_data => {
//         const data = transformWeather(weather_data);
//         this.setState({data}); /* Gracias a funcionalidad de ES6 cuando ambas variables tienen el mismo nombre (la que se recibe y la que se modificara) se puede colocar una sola */

//     });
// }

const WeatherLocation = ({city, data, onWeatherLocationClick }) => { 

    return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={city}/>
            {data ? <WeatherData data={data}/> : 
            <CircularProgress /> } {/* Operador ternario */}
        </div>
    );
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;
