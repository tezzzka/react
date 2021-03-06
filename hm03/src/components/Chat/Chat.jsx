
import './Chat.css';
import { Component, createRef, useRef } from 'react';
import { Messages } from '../Messages';
import { Message } from '../Message';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Chat extends Component {
    constructor(props) {
        super(props);
        this.textRef = createRef();
    }
    state = {
        id: 0,
        messages: [
            { id: 1, value: 'Hello world', author: 'Al Paccino', timestamp: new Date() }
            // { id: 2, value: 'Finnaly, Im wondered.', author: 'Feel', timestamp: new Date() },
            // { id: 3, value: 'Good Job, Mr.', author: 'Captain OneX', timestamp: new Date() }
        ]
    };

    componentDidUpdate() {
        console.log('test');
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 0) {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages,
                        { id: 5, value: 'Im just a boy-bot.', author: 'AI', timestamp: new Date() }
                    ]
                });
            }, 600);
        }
    }

    addMessage = () => {
        // console.log(this.textRef.current.value);
        if (this.textRef.current.value.length == 0) {
            this.textRef.current.focus();
            return;
        }
        this.setState({
            messages: [
                ...this.state.messages,
                { id: 5, value: this.textRef.current.value, author: 'You', timestamp: new Date() }
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
                    {/* <Messages /> */}
                    {this.state.messages.map((item, index) => (
                        <Message key={index}
                            text={item.value}
                            author={item.author}
                            className={item.author == 'AI' ? ' ai' : ' human'}
                        />
                    ))}
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
                        >send
                    </Button>
                    </div>

                </div>
            </div >
        )
    }
}
export { Chat }