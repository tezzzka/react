import { func } from "prop-types";
import { Component } from "react";
import './Header.css';


class Header extends Component {
    render() {
        return (
            <div id="Header">{this.props.children}</div>
        )
    }
}
export { Header }