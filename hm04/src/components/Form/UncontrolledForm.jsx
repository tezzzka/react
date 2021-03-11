import { Component, createRef } from 'react';

class UncontrolledForm extends Component {
    userRef = createRef();
    messageRef = createRef();

    componentDidMount() {
        this.userRef.current.focus();
        console.log(this.userRef)
    }

    handleSend = () => {
        const userName = this.userRef.current.value;
        const message = this.messageRef.current.value;

        console.log({ userName, message });
    }

    render() {
        return (<div>
            <input name="message" ref={this.userRef} />
            <input name="username" ref={this.messageRef} />
            <button onClick={this.handleSend}>Send</button>
        </div>)
    }
}

export { UncontrolledForm }