import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import propTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
  const { temperature, weatherState, humidity, wind } = data;
  return (
    <div className='weatherDataCont'>
      <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
      <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
  );
}

WeatherData.propTypes = {
  data: propTypes.shape({
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string.isRequired,
    humidity: propTypes.number.isRequired,
    wind: propTypes.string.isRequired
  })
};

export default WeatherData;
