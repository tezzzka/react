import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Link } from 'react-router-dom';

import Ava from './ava.png';
import './NewChat.css';

import { makeStylesAva } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStylesAva = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

function NewChat() {
    const classes = useStylesAva();
    return (
        <>
            <Link key={'0'} to={'/new'}>
                <div className="NewChatBox newChat">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <BlurOnIcon className="NewChatButton" />
                    </IconButton>
                </div>
            </Link>
            <Link key={'1'} to={'/profile'}>
                <div className="NewChatBox ava">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <Avatar alt="Remy Sharp" src={Ava} className={classes.large} />
                    </IconButton>
                </div>
            </Link>
        </>
    );
}

export { NewChat };