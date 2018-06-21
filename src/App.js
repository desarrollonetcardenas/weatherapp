import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import {Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';

const cities = ["Culiacan, Mx", "Brasilia, Brasil", "Bogota, Colombia", "Caracas, Venezuela", "Santiago, Chile", "Tel Aviv, Israel"];

const theme = createMuiTheme();

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`City selected ${city}`);
  }

  render(){
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
                  <div className='detail'></div>
              </Paper>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
    )
  }
}

export default App;
