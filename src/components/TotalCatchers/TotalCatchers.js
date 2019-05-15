import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class TotalCatchers extends Component {
    render() {
        return(
            <div>Total Catchers: {this.props.reduxState.catchersReducer.length}</div>
        )
    }
}

export default connect(mapReduxStateToProps)(TotalCatchers);