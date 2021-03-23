import { Component, createRef, useRef } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/actions/messageActions';
import { compose } from 'redux';

import { Message } from '../Message';
import './Chat.css';
import json from '../../JSON/Chats.json';

class _Chat extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        messages: PropTypes.array.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };
    state = {
        textMessage: '',
        messages: [],
        currentChat: this.props.currentChat,
    };

    fieldRef = createRef();

    getClass = (sw) => {
        switch (sw) {
            case 'AI': return ' ai';
            case 'human': return ' human';
            default: return ' redux';
        }
    }

    componentDidUpdate(prevState) {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    componentDidMount() {

    }

    addMessage = () => {
        this.state.textMessage.trim().length ?
            (
                this.props.sendMessage(this.state.textMessage, 'human', this.props.currentChat),
                this.setState({ textMessage: '' })
            )
            : '';
    }
    addMessageAlt = (e) => {
        e.key == 'Enter' ? this.addMessage() : ''
    }

    jsonLoad = () => {
        return json[this.props.currentChat] ? json[this.props.currentChat].messagesBox : [];
    }

    render() {
        // console.log(this.props);
        const { messages = {}, currentChat } = this.props;
        const nw = [...this.jsonLoad(), ...messages];
        return (
            <div id="Chat">
                <div className="msgBlock" >
                    {nw.map((msg, idx) => (
                        <Message key={idx} text={msg.value} author={msg.author}
                            className={this.getClass(msg.author)}
                        />
                    ))}
                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
                <div className="Footer">
                    <div className="messageTextField">
                        <TextField
                            value={this.state.textMessage}
                            label='type any here...'
                            // inputRef={this.textRef}
                            onChange={(e) => this.setState({ textMessage: e.target.value })}
                            onKeyPress={(e) => this.addMessageAlt(e)}
                        />
                    </div>
                    <div className="sendButton">
                        <Button
                            color="primary" variant="contained"
                            fullWidth={true}
                            onClick={this.addMessage}
                            className={"SendClass"}
                        >send
                    </Button>
                    </div>
                </div>
            </div >
        )

    }
}



const mapStateToProps = (state) => ({
    messages: state.chat.messages,
});
const Chat = compose(
    connect(mapStateToProps, { sendMessage })
)(_Chat);

export { Chat };