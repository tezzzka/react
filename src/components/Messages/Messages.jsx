import { Component } from 'react';
// import './Messages.css';
import { Message } from '../Message';

class Messages extends Component {
    state = {
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
        this.setState({
            messages: [
                ...this.state.messages,
                { id: 5, value: 'Id like to intoroduce to you all the world!', author: 'You', timestamp: new Date() }
            ]
        });
    }

    render() {
        return (
            <>
                <div className="messages">
                    {this.state.messages.map((item, index) => (
                        <Message key={index}
                            text={item.value}
                            author={item.author}
                            className={item.author == 'AI' ? ' ai' : ' human'}
                        />
                    ))}
                </div>
                <button onClick={this.addMessage}>Send message</button>
            </>
        );
    }
}

export { Messages };