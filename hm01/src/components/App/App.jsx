import { Component } from 'react';
import './App.css';
import { Messages } from '../Messages';


class App extends Component {
    state = {
        caption: 0
    }
    render() {
        return <div id='test-id'>
            <h2>Hello from React</h2>
            <Messages />
        </div>
    }
}

export { App };