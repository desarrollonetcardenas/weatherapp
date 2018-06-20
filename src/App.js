import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import {MuiThemeProvider} from '@material-ui/core/styles';
import './App.css';
import LocationList from './components/LocationList';

const cities = ["Culiacan, Mx", "Brasilia, Brasil", "Bogota, Colombia", "Caracas, Venezuela", "Santiago, Chile", "Tel Aviv, Israel"];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`City selected ${city}`);
  }

  render(){
    return(
      <div className="App">
        <MuiThemeProvider>
          <Grid>
            <Row>
              <Col xs={12}>
                <AppBar title="Weather App"></AppBar>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList
                  cities={cities}
                  onSelectedLocation={this.handleSelectedLocation}/>
              </Col>
              <Col xs={12} md={6}>
                <Paper zDepth={4}>
                  <div className='detail'></div>
                </Paper>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
