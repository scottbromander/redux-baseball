import React, { Component } from 'react';
import Pitchers from '../Pitchers/Pitchers';
import Catchers from '../Catchers/Catchers';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';
import OnTheMound from '../OnTheMound/OnTheMound';
import BehindThePlate from '../BehindThePlate/BehindThePlate.js';
import TotalPitchers from '../TotalPitchers/TotalPitchers';
import TotalCatchers from '../TotalCatchers/TotalCatchers';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Baseball Pitchers</h1>
        <OnTheMound />
        <BehindThePlate />
        <TotalPitchers />
        <TotalCatchers />
        <Pitchers />
        <Catchers />
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
