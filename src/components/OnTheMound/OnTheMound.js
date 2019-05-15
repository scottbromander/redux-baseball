import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class OnTheMound extends Component {
    render() {
        return(
            <h2>On the Mound: {this.props.reduxState.pitcherSelectedReducer}</h2>
        )
    }
}

export default connect(mapReduxStateToProps)(OnTheMound);