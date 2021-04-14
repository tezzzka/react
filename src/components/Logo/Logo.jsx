import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import logo from './Logo.png'
import './Logo.css';
import { Component } from 'react';



class Logo extends Component {
    render() {
        return (
            <Link key={'0'} to={'/'}>

                <img src={logo} className={"logotype"} />
            </Link >
        )
    }
}


export { Logo };