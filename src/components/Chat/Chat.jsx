import { Component, createRef, useRef } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage, apiMessage, uploadMessages } from '../../redux/actions/messageActions';


import { Message } from '../Message';
import './Chat.css';
import json from '../../JSON/Chats.json';


class _Chat extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        sendMessage: PropTypes.func.isRequired,
        apiMessage: PropTypes.func.isRequired,
        // uploadMessages: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,

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
                nw.push(messages[key]) : '';
            if (messages[key].author == 'api') {
                for (const msg of messages[key].value) nw.push(msg);
            }
        }
        return nw;
    }

    componentDidMount() {
        this.props.uploadMessages();
    }

    componentDidUpdate(prevState) {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    addMessage = () => {
        this.state.textMessage.trim().length ?
            (
                this.props.sendMessage(this.state.textMessage, this.props.nickname, this.props.currentChat),
                this.setState({ textMessage: '' }),
                fetch('http://localhost:3000/APIChat', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        value: this.state.textMessage,
                        author: 'api',
                        seen: false
                    })
                })
            )
            : '';
        // this.props.push('/');
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

    nwWrapper = (nw) => {
        if (!nw || nw.length == 0) return;
        return (
            nw.map((msg, idx) => (
                <Message key={idx} text={msg.value} author={msg.author}
                    className={this.getClass(msg.author)}
                    onClick={() => this.killMessage(idx)}
                />
            ))
        )
    }



    render() {

        const { messages = {}, currentChat, isLoading = false } = this.props;

        const nw = this.myMessages(this.jsonLoad(), messages, currentChat);
        if (isLoading) {
            console.log('await please.');
        }
        return (
            <div id="Chat">
                <div className="msgBlock" >

                    {this.nwWrapper(nw)}
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
    messages: state.chat.messages,
    nickname: state.user.nickname,
    avatar: state.user.avatar,
    isLoading: state.chat.isLoading,
});
const Chat = connect(mapStateToProps, {
    sendMessage,
    apiMessage,
    uploadMessages,
})(_Chat);
// const Chat = compose(
//     connect(mapStateToProps, {
//         push,
//         sendMessage,
//         apiMessage,
//         uploadMessages
//     })
// )(_Chat);

export { Chat };