import { Component, createRef, useRef } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../redux/actions/messageActions';
import { compose } from 'redux';
import { } from 'connected-react-router';
import { Message } from '../Message';
import './Chat.css';
import json from '../../JSON/Chats.json';

class _Chat extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        // messages: PropTypes.array.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };
    state = {
        textMessage: '',
        messages: [],
        currentChat: this.props.currentChat,
        nickname: this.props.username,
        avatar: this.props.avatar,

    };

    // fieldRef = createRef();

    getClass = (sw) => {
        switch (sw) {
            case 'AI': return ' ai';
            case 'human': return ' human';
            default: return ' redux';
        }
    }
    myMessages = (jsonObject, messages, point) => {
        let nw = [...jsonObject];
        for (let key = 0; key < messages.length; key++) {
            messages[key].chatroom == point ?
                nw.push(messages[key]) : ''
        }
        return nw;
    }

    componentDidUpdate(prevState) {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    addMessage = () => {
        this.state.textMessage.trim().length ?
            (
                this.props.sendMessage(this.state.textMessage, this.props.nickname, this.props.currentChat),
                this.setState({ textMessage: '' })
            )
            : '';
    }
    addMessageAlt = (e) => {
        e.key == 'Enter' ? this.addMessage() : ''
    }
    focusHandle = (e) => {
        // console.log(e);
    }

    jsonLoad = () => {
        return json[this.props.currentChat] ? json[this.props.currentChat].messagesBox : [];
    }

    killMessage = (idx) => {
        // console.log(idx);
        // console.log(this.props)
    }

    render() {
        // console.log(getLocation);
        // console.log(this.props);
        const { messages = {}, currentChat } = this.props;
        const nw = this.myMessages(this.jsonLoad(), messages, currentChat);
        // console.log(nw);
        return (
            <div id="Chat">
                <div className="msgBlock" >
                    {nw.map((msg, idx) => (
                        <Message key={idx} text={msg.value} author={msg.author}
                            className={this.getClass(msg.author)}
                            onClick={() => this.killMessage(idx)}
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
                            onFocus={(e) => this.focusHandle(e)}
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
    // router: state.router,
    messages: state.chat.messages,
    nickname: state.user.nickname,
    avatar: state.user.avatar,
});
const Chat = compose(
    connect(mapStateToProps, { sendMessage })
)(_Chat);

export { Chat };