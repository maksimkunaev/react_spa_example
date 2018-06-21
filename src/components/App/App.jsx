import React, { Component } from 'react';
import './App.styl';
import { bind } from 'decko';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    @bind
    onBtnClick() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let { open } = this.state;

        return (
            <div className='App'>
               {open ? 'Hello' : 'Clicked'}
               <button onClick={this.onBtnClick}>click</button>
            </div>
        )
    }
}

export default App;
