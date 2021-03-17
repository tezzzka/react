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
        const { match } = this.props;
        return (
            <>
                <ChatList />
                <div id="Layout">
                    <MessageField>
                        <Chat currentChat={match.params.chatname} />
                    </MessageField>
                </div>
            </>

        )
    }
}
const Layout = withRouter(_Layout);
export { Layout }