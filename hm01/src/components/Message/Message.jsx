import { Component } from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className={this.props.style}>{this.props.text}</div>
        )
    }
}

export { Message };