import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
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
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className='red'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='green'></div>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className='blue'></div>
            </Col>
          </Row>
        </Grid>
      {/*<div className="App">
        <MuiThemeProvider theme=''>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
        </MuiThemeProvider>
      </div>*/}
      </MuiThemeProvider>
    )
  }
}

export default App;
