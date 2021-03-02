import { Component } from 'react';
import './App.css';
import { Messages } from '../Messages';


class App extends Component {
    state = {
        count: 0,
        isShowMessages: true,
        caption: 'скрыть'
    }
    componentDidMount() {
        console.log('A Component was mounted.');
    }
    componentDidUpdate() {
        console.log('A Component was updated.');
    }
    componentWillUnmount() {
        console.log('A Component will unmount');
    }
    toggleMessages = () => {
        this.state.isShowMessages ? this.state.caption = 'показать' : this.state.caption = 'скрыть';
        this.setState({ isShowMessages: !this.state.isShowMessages });

    }

    handleClick = () => {
        this.state.count == 5 ? this.state.count = 0 : this.setState({ count: this.state.count + 1 });
        // this.setState({count: this.state.count+1})
    }
    handleChange = () => {
        console.log('test');
    }
    render() {
        return <div id='test-id'>
            <h2>Hello from React</h2>
            <button onClick={this.toggleMessages}>{this.state.caption}</button>
            {this.state.isShowMessages ? (
                <Messages
                    entry={['ok', 'obi', 'folrever']}
                    count={this.state.count}
                    handleClick={this.handleClick}
                />
            ) : null}

            {/* <button onClick={this.handleClick}>{this.state.count}</button> */}
        </div>
    }
}

export { App };