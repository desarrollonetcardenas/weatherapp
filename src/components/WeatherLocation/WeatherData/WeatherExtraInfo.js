import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='weatherExtraInfoCont'>
    <span className='extraInfoText'>{`Humedad ${humidity}%`}</span>
    <span className='extraInfoText'>{`Vientos ${wind}`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
  wind: propTypes.string.isRequired,
  humidity: propTypes.number.isRequired
}


export default WeatherExtraInfo;
