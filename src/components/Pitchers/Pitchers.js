import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class Pitchers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPitcher: '',
        }
    }

    handlePitcherNameChange = event => {
        this.setState({
          newPitcher: event.target.value,
        });
    }

    handlePitcherSubmit = event => {
        event.preventDefault();
        this.props.dispatch({type: 'PITCHER_SUBMIT', payload: this.state.newPitcher});
    }

    handlePitcherSelectClick = (event) => {
        this.props.dispatch({type: 'PITCHER_SELECT', payload: event.target.dataset.name})
    }

    render() {
        return (
            <div>
                <h3>All Pitchers</h3>
                <form onSubmit={this.handlePitcherSubmit}>
                    <input
                        type="text"
                        value={this.state.newPitcher}
                        onChange={this.handlePitcherNameChange}
                        placeholder="New Pitcher Name"
                    />
                    <button type="submit">Add Pitcher</button>
                </form>
                <ul>
                    {this.props.reduxState.pitchersReducer.map((pitcher, id )=> (
                        <li
                        data-name={pitcher}
                        onClick={this.handlePitcherSelectClick}
                        >
                        {pitcher}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Pitchers);