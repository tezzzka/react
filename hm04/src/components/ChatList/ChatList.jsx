import './ChatList.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const ChatBox = [
    { idx: 0, name: 'WowChat', target: '/chat/WowChat' },
    { idx: 1, name: 'SleepyChat', target: '/chat/SleepyChat' },
    { idx: 2, name: 'ModernChat', target: '/chat/ModerChat', slug: 'conversation' },
]

function ChatList() {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '25%',
            // backgroundColor: theme.palette.background.paper,
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
            <List component="nav" aria-label="secondary mailbox folders" className={classes.root}>
                {
                    ChatBox.map((Obj) => (
                        // console.log(Obj.idx)
                        <Link key={Obj.idx} to={Obj.target}>
                            <ListItem button>
                                <ListItemText primary={Obj.name} />
                            </ListItem>
                        </Link>
                    ))
                }


            </List>
        </div >
    );
}


export { ChatList }