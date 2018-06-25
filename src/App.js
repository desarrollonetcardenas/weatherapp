import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = ["Culiacan, Mx", "Brasilia, Brasil", "Bogota, Colombia", "Caracas, Venezuela", "Santiago, Chile", "Tel Aviv, Israel"];

const theme = createMuiTheme();

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null
    }
  }
  handleSelectedLocation = city => {
    this.setState({ city: city });
    console.log('handleSelectedLocation ' + {city});
  }

  render(){
    const {city} = this.state;
    return(
        <MuiThemeProvider theme={theme}>
          <Grid>
            <Row>
              <Col xs={12}>
                <AppBar color="secondary">Weather App</AppBar>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList
                  cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}/>
              </Col>
              <Col xs={12} md={6}>
              <Paper zdepth={2}>
                  <div className='detail'>
                  {
                    city && <ForecastExtended city={city}></ForecastExtended>
                  }
                  </div>
              </Paper>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
    )
  }
}

export default App;
