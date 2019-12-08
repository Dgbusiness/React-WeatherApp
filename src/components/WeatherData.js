import React from 'react';
import WeatherTemperature from './WeatherTemprature';
import WeatherExtrainfo from './WeatherExtrainfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature/>
        <WeatherExtrainfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;