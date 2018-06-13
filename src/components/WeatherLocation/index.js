import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import{
  DAY_SUNNY
} from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';

const location = "Sinaloa, Mx";
const api_key="bfd5b8a316e04133e81ffb5a8031af4e";
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


const data1 = {
  temperature: 55,
  weatherState: DAY_SUNNY,
  humidity: 50,
  wind: '10 m/s'
};

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city: 'Culiacan',
      data: data1
    };
    console.log('constructor');
  }

  componentWillMount(){
    this.handleUpdateClick();
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate ');
  }

  handleUpdateClick = () => {

      fetch(api_weather).then(data=> {
        return data.json();
      })
      .then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data });
      })
      .catch(err=>{
        console.log(err);
      });

      console.log("actualizado");
  }

  render = () =>{
    const { city, data } = this.state;
    return (
      <div className='weatherLocationCont'>
       <Location city={ city }/>
       <WeatherData data={ data }/>
       <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;
