import { Component, react, createRef, useRef } from 'react';
import { PropTypes } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Ava from './ava.png';

import { connect } from 'react-redux';
import { setUsername } from '../../redux/actions/setUsernameAction';
import { compose } from 'redux';
import { SwitchLabels } from '../Nav/SwitchLabels';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        '& > *': {
            // margin: theme.spacing(1),
        },
    },
    large: {
        // width: theme.spacing(7),
        // height: theme.spacing(7),
    },
    body: {
        margin: '30px 30%',
    },
    field: {
        display: 'block',
        width: '100%'
    },
});

class _Profile extends Component {
    static propTypes = {
        username: PropTypes.string,
        avatar: PropTypes.string,
        setUsername: PropTypes.func.isRequired,
    };
    state = {
        username: this.props.username,
        avatar: this.props.avatar,
    }

    handle = (nick) => {
        this.setState({ username: nick }, () => {
            this.props.setUsername(nick);
        });
    }

    render() {
        const classes = useStyles;
        // console.log(this.props);
        return (
            <div className={classes.body} >
                <div className={classes.root + ' ava'}>
                    <Avatar alt="Remy Sharp" src={Ava} className={classes.large} />
                    <TextField className={classes.field}
                        value={this.state.username}
                        label='Your nick is here...'
                        onChange={(e) => this.handle(e.target.value)}
                    />
                    <SwitchLabels />
                </div>
            </div >

        );
    }
}

const mapStateToProps = (state) => ({
    username: state.user.nickname,
    avatar: state.user.avatar
});
const Profile = compose(
    connect(mapStateToProps, { setUsername })
)(_Profile);

export { Profile };