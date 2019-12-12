import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUDY, 
        SUN, 
        RAIN, 
        SNOW,
        WINDY 
} from './../../../constants/weathers';

const stateToIconName = weatherState => {
    switch (weatherState) {         
        case CLOUDY:
            return "cloudy";           
        case SUN:
            return "day-sunny";           
        case RAIN:
            return "rain";           
        case SNOW:
            return "snow";           
        case WINDY:
            return "windy";           
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {   
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />);                 
};


const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{temperature} C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    //Objeto de WeatherTemperature con propiedades a validar

    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;