import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './NavNewChat.css';
import { Component } from 'react';

function NavNewChat() {
    const [open, setOpen] = React.useState(false);
    const [newline, setNewline] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log(newline);
    }
    const handleChange = event => {
        setOpen(true);
        setNewline(event.target.value);
    }
    return (
        <>
            <Link key={'0'} to={'/new'} onClick={handleClickOpen}>
                <div className="NewChatBox newChat">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <BlurOnIcon className="NewChatButton" />
                    </IconButton>
                </div>
            </Link>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Создаем новый чат</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Здесь пишем название нового чата"
                        type="email"
                        fullWidth
                        onChange={handleChange}
                        value={newline}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        >>>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );

}

export { NavNewChat };