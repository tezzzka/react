import { Component, createRef, useRef } from 'react';

import { Messages } from '../Messages';
import { Message } from '../Message';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router';

import './Chat.css';

class _Chat extends Component {
    constructor(props) {
        super(props);
        this.textRef = createRef();
    }
    static propTypes = {
        currentChat: PropTypes.string,
    };
    state = {
        messages: this.props.MessageBox,
    };

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.messages.length !== this.state.messages.length &&
        //     this.state.messages.length % 2 === 0) {
        //     setTimeout(() => {
        //         this.setState({
        //             messages: [
        //                 ...this.state.messages,
        //                 { id: 5, value: 'Im just a boy-bot.', author: 'AI', timestamp: new Date() }
        //             ]
        //         });
        //     }, 600);
        // }
    }

    addMessage = () => {
        // console.log(this.textRef.current.value);
        const { current } = this.props;
        console.log(current);
        console.log(this.state.messages.length);

        if (this.textRef.current.value.length == 0) {
            this.textRef.current.focus();
            return;
        }
        this.setState({
            messages: [
                ...this.state.messages,
                { id: this.state.messages.length + 1, value: this.textRef.current.value, author: 'You', timestamp: new Date() }
            ]
        });
        this.textRef.current.value = '';
    }
    addMessageAlt = (e) => {
        e.key == 'Enter' ? this.addMessage() : ''
    }

    render() {
        return (
            <div id="Chat">
                <div className="msgBlock">
                    {(this.state.messages &&
                        this.state.messages.map(obj => (
                            <Message key={obj.id} text={obj.value} author={obj.author}
                                className={obj.author == 'AI' ? ' ai' : ' human'}
                            />
                        ))
                    )}
                </div>
                <div className="Footer">
                    <div className="messageTextField">
                        <TextField
                            label='type any here...'
                            inputRef={this.textRef}
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
const Chat = withRouter(_Chat);
export { Chat }