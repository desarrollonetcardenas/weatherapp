import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './App.css';
import LocationList from './components/LocationList';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  handleSelectedLocation = city => {
      this.setState({ city });
  }

  render(){
    return(
      <div className="App">
        <MuiThemeProvider>
          <LocationList city={'Culiacan , Mx'}/>
          <LocationList city={'Bogota, Colombia'}/>
          <LocationList city={'Santiago,Chile'}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
