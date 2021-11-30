// rafce
import React from 'react';
import './Header.css';

import logo from './logo.png';
import adidas from './logo-adidas.png';
import nike from './logo-nike.png';
import jordan from './logo-jordan.png';
import puma from './logo-puma.png';


const Header = (props) => {
    return (
        <div style={{backgroundColor: `${props.color}`}} className='Header'>
            {/* <img src={logo} alt="logo www wide" /> */}
            <div className='Logos'>
                <img src={adidas} alt="Adidas" />
                <img src={nike} alt="Nike" />
                <img src={jordan} alt="Jordan" />
                <img src={puma} alt="Puma" />
            </div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Header
