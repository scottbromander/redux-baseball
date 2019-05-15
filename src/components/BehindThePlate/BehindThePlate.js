import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class BehindThePlate extends Component {
    render() {
        return(
            <h2>Behind the Plate: {this.props.reduxState.catcherSelectedReducer}</h2>
        )
    }
}

export default connect(mapReduxStateToProps)(BehindThePlate);