import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class TotalPitchers extends Component {
    render() {
        return(
            <div>Total Pitchers: {this.props.reduxState.pitchersReducer.length}</div>
        )
    }
}

export default connect(mapReduxStateToProps)(TotalPitchers);