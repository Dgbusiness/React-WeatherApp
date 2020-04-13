import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from "./ForecastItem";
import "./style.css";

const renderProgress = () => {
    return <h3>Cargando pronóstico extendido...</h3>;
}

const renderForecastItemDays = forecastData => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={forecast.weekDay+forecast.hour} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>
    ))
}

const ForecastExtended = ({ city, forecastData }) => {
    
        return (
            <div className="forecastCont">
                <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    renderForecastItemDays(forecastData) :
                    renderProgress()
                }
            </div>
        );
};

ForecastExtended.propTypes = {
    city: PropTypes.string,
    forecastData: PropTypes.array,
};

export default ForecastExtended;