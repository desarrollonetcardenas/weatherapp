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
        <Grid>
          <Row>
            <h1>Grid System: xs, sm, md, lg</h1>
          </Row>
          <Row>
            <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
          </Row>
          <Row around="xs">
            <Col xs={2}>
              <div className='red'></div>
            </Col>
            <Col xs={2}>
              <div className='green'></div>
            </Col>
            <Col xs={2}>
              <div className='blue'></div>
            </Col>
            <Col xs={2}>
              <div className='yellow'></div>
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
