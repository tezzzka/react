import { Component } from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className={'msg' + this.props.className}>
                <div className="msgText">{this.props.text}</div>
                <div className="msgAuthor">{this.props.author}</div>
            </div >
        )
    }
}

export { Message };
