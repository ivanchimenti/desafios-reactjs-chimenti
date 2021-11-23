// rafce
import React from 'react';
import './Header.css';

import logo from './logo.png';

const Header = (props) => {
    return (
        <div style={{backgroundColor: `${props.color}`}} className='Header'>
            <img src={logo} alt="logo www wide" />
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Header
