import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Ava from './ava.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root + ' ava'}>
            <Avatar alt="Remy Sharp" src={Ava} className={classes.large} />
        </div>
    );
}
export { Profile }