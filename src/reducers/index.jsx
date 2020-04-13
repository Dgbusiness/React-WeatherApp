import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { city } from "./city";
import { 
    cities, 
    getForestcastDataFromCities as _getForestcastDataFromCities,
    getWeatherCities as _getWeatherCities
} from "./cities";

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);
export const getForestcastDataFromCities = createSelector(state => state.cities, getCity, _getForestcastDataFromCities);
export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);