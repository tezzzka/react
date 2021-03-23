import { React, Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createNewChat } from '../../../redux/actions/newchat';
import { compose } from 'redux';

import './NavNewChat.css';


class NavNewChat extends Component {
    addChat = () => {
        createNewChat('chhat');
    };
    render() {
        return (
            <>
                <Link key={'0'} to={'#'} onClick={this.addChat}>
                    <div className="NewChatBox newChat">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <BlurOnIcon className="NewChatButton" />
                        </IconButton>
                    </div>
                </Link>

            </>
        );
    }
}

export { NavNewChat };