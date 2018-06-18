import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from '../../services/transformWeather';

class WeatherLocation extends Component {
  constructor({ city }){
    super();
    this.state = {
      city: city,
      data: null
    };
  }

  componentWillMount(){
    this.getWeatherDataApi();
  }

  getWeatherDataApi= () => {
    const { city } = this.state;
    const api_key="bfd5b8a316e04133e81ffb5a8031af4e";
    const url= "https://api.openweathermap.org/data/2.5/weather";
    const api_weather = `${url}?q=${city}&appid=${api_key}`;

    fetch(api_weather).then(data=> {
      return data.json();
    })
    .then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    })
    .catch(err=>(console.log(err))
    );
  }
  handleUpdateClick = () => {
    this.getWeatherDataApi();
  }

  render = () =>{
    const { city, data } = this.state;
    const { onWeatherLocationOnClick } = this.props;
    return (
      <div className='weatherLocationCont' onClick={onWeatherLocationOnClick}>
       <Location city={ city }/>
       {data ? <WeatherData data={ data }/> : <CircularProgress className='classes.progress'/>}
       <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationOnClick: PropTypes.func
}

export default WeatherLocation;
