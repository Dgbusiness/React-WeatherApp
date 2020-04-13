import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity = payload => {
  return ({
    type: SET_CITY,
    payload
  });
};

const setForecastData = payload => {
  return ({
    type: SET_FORECAST_DATA,
    payload
  })
}

const getWeatherCity = payload => {
  return ({
    type: GET_WEATHER_CITY,
    payload
  })
};

const setWeatherCity = payload => {
  return ({
    type: SET_WEATHER_CITY,
    payload
  })
};

const celcius = "&units=metric";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const api_forecast = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q=';

export const setSelectedCity = payload => {

  return (dispatch, getState) => {
    const url_forecast = api_forecast + payload + '&appid=' + api_key + celcius;

    // Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;

    const now = new Date();

    if (date && (now - date) < 5*60*1000) {
      return;
    }
        
    return fetch(url_forecast).then(data => {

        /*debugger; Breakpoint */
        return data.json();

    }).then(weather_data => {
        const forecastData = transformForecast(weather_data);

        // Modificar el estado con el resultado de la promise (fetch)
        dispatch(setForecastData({city: payload, forecastData}));
    });
  }
};
 
export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const url_weather = api_weather + city + '&appid=' + api_key + celcius;        
      fetch(url_weather).then(data => {
         return data.json();    
      }).then(weather_data => {
          const weather = transformWeather(weather_data);

          dispatch(setWeatherCity({city, weather}));
      });
    })
  };
};