
import { Component, useState } from "react";


class Chkbox extends Component {
    state = {
        point: false,
        ext: 'выкл'
    }


    Agree = () => {
        console.log('test');
        this.setState({ point: !this.state.point })
    }
    render() {
        return (
            <>
                <input type="checkbox" name="nickname"
                    defaultChecked={false} onChange={this.Agree} />
                <label htmlFor="nickname">{this.state.ext}</label>
            </>
        )
    }
}
export { Chkbox };