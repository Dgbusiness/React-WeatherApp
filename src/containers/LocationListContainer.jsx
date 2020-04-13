import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "../actions";
import { getWeatherCities, getCity } from "../reducers";
import LocationList from "../components/LocationList";


class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;

        setWeather(cities);
        setSelectedCity(city);
    }
    
   
    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList 
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectedLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

//const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch); -> debes importar bindActionCreators de redux.
const mapDispatchToPropsActions = dispatch => {
    return ({
        setSelectedCity: value => dispatch(setSelectedCity(value)),
        setWeather: cities => dispatch(setWeather(cities))
    });
};

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);