import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const NavRecharger = (jsonObject, messagesArray) => {
    let idx = 0;
    let NavList = [];
    for (let [link, val] of Object.entries(jsonObject)) {
        let counter = 0;
        for (let key = 0; key < messagesArray.length; key++) {
            messagesArray[key].chatroom == link &&
                messagesArray[key].seen == false ?
                counter++ : '';
        }
        const Icon = '';
        const mess = '';

        if (counter > 0) {
            Icon = <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '.75em', marginLeft: '.5em', color: 'red' }} />;
            mess = <span style={{ fontSize: '.6em' }}>+{counter}</span>;
        }
        NavList.push(
            <Link key={idx} to={val.target} >
                <ListItem button>
                    {link}
                    {Icon}{mess}
                </ListItem>

            </Link>
        )
        idx++;
    }
    return NavList;
}