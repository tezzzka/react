import './ChatList.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

function ChatList(NavLink = null) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '20% !important',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }
    const classes = useStyles();
    // console.log(NavLink);

    return (
        <div id="ChatList" className={classes.root}>
            <List component="nav" className={classes.root}>
                {NavLink.NavLink.map((link, index) => (
                    < Link key={index} to={link.NavLink} >
                        <ListItem button>
                            <ListItemText primary={link.ChatName} />
                        </ListItem>
                    </Link>
                ))
                }
            </List>
        </div >
    );
}


export { ChatList }