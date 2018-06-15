import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ city }) => {
  return (
    <div>
      <WeatherLocation city={city}/>
    </div>
  )
}

export default LocationList;
