import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../module/mapReduxStateToProps';

class Catchers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newCatcher: '',
        }
    }

    handleCatcherNameChange = event => {
        this.setState({
          newCatcher: event.target.value,
        });
    }
    
    handleCatcherSubmit = event => {
        event.preventDefault();
        this.props.dispatch({type: 'CATCHER_SUBMIT', payload: this.state.newCatcher});
    }

    handleCatcherSelectClick = (event) => {
        this.props.dispatch({type: 'CATCHER_SELECT', payload: event.target.dataset.name})
    }

    render() {
        return (
            <div>
                <h3>All Catchers</h3>
                <form onSubmit={this.handleCatcherSubmit}>
                    <input
                        type="text"
                        value={this.state.newCatcher}
                        onChange={this.handleCatcherNameChange}
                        placeholder="New Catcher Name"
                    />
                    <button type="submit">Add Catcher</button>
                </form>
                <ul>
                    {this.props.reduxState.catchersReducer.map(catcher => (
                    <li
                    data-name={catcher}
                    onClick={this.handleCatcherSelectClick}
                    >
                    {catcher}
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Catchers);