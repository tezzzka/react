import { func } from "prop-types";
import { Component } from "react";

class Layout extends Component {
    render() {
        return (
            <div id="Layout">{this.props.children}</div>
        )
    }
}
export { Layout }