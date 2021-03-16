import { Component } from "react";
import './Header.css';

class Header extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div id="Header">{this.props.children}</div>
        )
    }
}
export { Header }