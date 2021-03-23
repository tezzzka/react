import './ChatList.css';

import { React, Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createNewChat } from '../../redux/actions/newchat';
import { compose } from 'redux';

import json from '../../JSON/Chats.json';

class _ChatList extends Component {
    static propTypes = {
        custom: PropTypes.array.isRequired,
        createNewChat: PropTypes.func.isRequired,
    };

    state = {
        nav: this.props.hello || [],
        custom: [],
    }
    componentDidMount() {
        this.props.hello ? this.state.nav :
            this.setState({ nav: this.Items() });

    }

    addChat = () => {
        this.props.createNewChat('chhat');
    };

    ListItemLink = (props) => {
        return <ListItem button component="a" {...props} className={"link"} />;
    }
    Items = () => {
        let idx = 0;
        let NavList = [];
        for (let [link, val] of Object.entries(json)) {
            NavList.push(
                <Link key={idx} to={val.target} >
                    <ListItem button>
                        {link}
                    </ListItem>
                </Link>
            )
            idx++;
        }
        return NavList;
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

    render() {
        // const { classes } = this.props;
        // this.setState({ custom: this.Custom() });
        // console.log(this.props.custom);
        return (
            <div id="ChatList">
                <Button
                    color="primary" variant="contained"
                    fullWidth={true}
                    onClick={this.addChat}
                    className={"SendClass"}
                >new
                    </Button>
                <List component="nav" >{this.state.nav}</List>
                <List component="nav">{this.Custom()}</List>
            </div >
        )
    }
}

const ToProps = (state) => ({
    custom: state.rooms.links,
});
const ChatList = compose(
    connect(ToProps, { createNewChat })
)(_ChatList);

export { ChatList }