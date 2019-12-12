import React from 'react';
import WeatherTemperature from './WeatherTemprature';
import WeatherExtrainfo from './WeatherExtrainfo';
import {CLOUDY, 
        SUN, 
        RAIN, 
        SNOW,
        WINDY 
} from '../../../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtrainfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;