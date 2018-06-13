import React, {Component} from 'react';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './App.css';
import WeatherLocation from './components/WeatherLocation';
/* import {createStore} from 'redux';*/

/*// const store = createStore(( => {}));*/

class App extends Component {
  handleSelectedLocation = city => {
      this.setState({ city });
      console.log(`handleSelectedLocation ${ city }`);

      /*// const action = { type: 'setCity', value: city }
      // store.dispatch(action);*/
  }

  render(){
    return(
      <div className="App">
        <MuiThemeProvider>
          <WeatherLocation/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
