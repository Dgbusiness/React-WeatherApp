import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUDY, 
        SUN, 
        RAIN, 
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE 
} from '../../../constants/weathers';
import './style.css';

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
        case THUNDER:
            return "day-thunderstorm";           
        case DRIZZLE:
            return "day-showers";           
        default:
            return "day-sunny";
    }
};

const getWeatherIcon = weatherState => {   
    return (<WeatherIcons className='wIcon' name={stateToIconName(weatherState)} size="3x" />);                 
};


const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature}</span>
        <span className="temperatureType"> C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    //Objeto de WeatherTemperature con propiedades a validar

    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;