import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

import Ava from './ava.png';
import './NavProfile.css';

//import { makeStylesAva } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStylesAva = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

function NavProfile() {
    const classes = useStylesAva();
    return (
        <>
            <Link key={'0'} to={'/profile'}>
                <div className="NewChatBox ava">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <Avatar alt="Remy Sharp" src={Ava} className={classes.large} />
                    </IconButton>
                </div>
            </Link>
        </>
    );
}

export { NavProfile };