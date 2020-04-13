import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getForestcastDataFromCities, getCity } from "../reducers";
import ForecastExtended from "../components/ForecastExtended"

class ForecastExtendedContainer extends PureComponent {

    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForecastExtended city = {city} forecastData={forecastData}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForestcastDataFromCities(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);