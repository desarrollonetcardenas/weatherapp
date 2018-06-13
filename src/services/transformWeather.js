import convert from 'convert-units';
import{
  DAY_SUNNY
} from '../constants/weathers';

const getWeatherState = weather => {
  return DAY_SUNNY;
}
const getTemperature = kelvin =>{
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(this.weather);
  const temperature = getTemperature(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${ speed } m/s`
  }
  return data;
}

export default transformWeather;
