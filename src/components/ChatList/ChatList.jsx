import './ChatList.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import json from '../../JSON/Chats.json';

function ChatList() {
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

    return (
        <div id="ChatList" className={classes.root}>
            <List component="nav" className={classes.root}>
                {json.map((link, index) => (
                    < Link key={index} to={link.target} >
                        <ListItem button>
                            <ListItemText primary={link.name} />
                        </ListItem>
                    </Link>
                ))
                }
            </List>
        </div >
    );
}


export { ChatList }