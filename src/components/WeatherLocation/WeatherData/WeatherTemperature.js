import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import  {
    CLOUD,
    CLOUDY,
    DAY_SUNNY,
    RAIN,
    SNOW,
    WINDY
} from '../../../constants/weathers';
import PropTypes from 'prop-types';

const stateToIconName = weatherState =>{
  switch (weatherState) {
    case CLOUD:
      return "cloud";
    case CLOUDY:
        return "cloudy";
    case DAY_SUNNY:
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
  return(<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x"/>)
};

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className='weatherTemperatureCont'>
    {getWeatherIcon(weatherState)}
    <span className='temperature'>{`${temperature}`}</span>
    <span className='temperatureType'>C</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string
}

export default WeatherTemperature;
