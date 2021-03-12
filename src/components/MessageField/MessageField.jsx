import { Component } from 'react';
import './MessageField.css';

class MessageField extends Component {
    render() {
        return (
            <div id="MessageField">{this.props.children}</div>
        )
    }
}

export { MessageField }