import { PropTypes } from "prop-types";
import { Component } from "react";
import { ChatList } from '../ChatList';
import { MessageField } from '../MessageField';
import { Chat } from '../Chat';
import { withRouter } from 'react-router';
import './Layout.css';


class _Layout extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    render() {
        const { match, MessageBox } = this.props;
        console.log(match);
        return (
            <>
                <ChatList />
                <div id="Layout">
                    <MessageField>
                        <Chat MessageBox={MessageBox} />
                    </MessageField>
                </div>
            </>
        )
    }
}
const Layout = withRouter(_Layout);
export { Layout }