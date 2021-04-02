import './ChatList.css';

import { React, Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavRecharger } from '../../redux/reducers/func';
import json from '../../JSON/Chats.json';

import { connect } from 'react-redux';
import { createNewChat } from '../../redux/actions/newchat';
import { compose } from 'redux';

class _ChatList extends Component {
    static propTypes = {
        custom: PropTypes.array.isRequired,
        createNewChat: PropTypes.func.isRequired,
    };

    state = {
        custom: [],
        nav: this.props.navi || [],
    }

    addChat = () => {
        this.props.createNewChat('chhat');
    };

    ListItemLink = (props) => {
        return <ListItem button component="a" {...props} className={"link"} />;
    }

    Custom = () => {
        let idx = 0;
        let CustomList = [];
        this.props.custom.map((link, idx) => {
            CustomList.push(
                <Link key={idx} to={`/chat/${idx}`} >
                    <ListItem button>
                        {link}
                    </ListItem>
                </Link>
            )
            idx++;
        })
        return CustomList;
    }
    componentDidUpdate(prev) {
        prev.messages.length !== this.props.messages.length ?
            this.setState({ nav: NavRecharger(json, this.props.messages) }) : '';
    }

    render() {
        // console.log(this.props);

        return (
            <div id="ChatList">
                <List component="nav" >{this.state.nav}</List>
                <List component="nav">{this.Custom()}</List>
            </div >
        )
    }
}

const ToProps = (state) => ({
    custom: state.rooms.links,
    navi: state.chat.navi,
    messages: state.chat.messages,
});
const ChatList = compose(
    connect(ToProps, { createNewChat })
)(_ChatList);

export { ChatList }