import { Component } from 'react';

class Form extends Component {
    state = {
        message: '',
        username: '',
        agreement: false
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleCheckbox = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    }
    handleKeyDown = (event) => {
        console.log(event.key);
        if (event.key === 'Enter') {
            this.doSmt();
        }
    }
    doSmt = () => {
        // console.log('test');
    }
    formSubmit = (event) => {
        event.preventDefault();
        this.doSmt();

    }
    render() {
        return (<div>
            <form onSubmit={this.formSubmit}>
                <input name="message" value={this.state.message} onChange={this.handleChange} />
                <input name="username" value={this.state.username}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <input name="agreement" type="checkbox" checked={this.state.agreement} onChange={this.handleCheckbox} />
                <button>Send</button>
            </form>
        </div>)
    }
}

export { Form }