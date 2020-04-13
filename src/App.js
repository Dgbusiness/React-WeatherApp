import React, { Component } from 'react';
import {
  Paper, 
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

import './App.css';

const cities = [
  "Caracas, VE",
  "Madrid, ES",
  "New York, US"
]


class App extends Component {

  render() {

    return (

      <Grid>
        <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Weather App by Dgbusiness
              </Typography>
            </Toolbar>
        </AppBar>
        <Row>
          <Col xs={12} sm={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} sm={6}>
            <Paper elevation={3}>
              <div className="detail">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
      
    );

  }

}

export default App;