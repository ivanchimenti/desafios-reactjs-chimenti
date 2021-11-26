import React, { Fragment } from "react";
import './NavBar.css';
import logo from './logo512.png';
import { Icon } from 'semantic-ui-react';

const NavBar = () => {

    return(
        <Fragment>
            <nav className="container navbar">
                <img src={logo}/>

                <Icon name='cart arrow down' style={{fontSize: "5em", marginTop: "50px", color:"red"}}/>

                <div className="barraBusqueda">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="textField"
                        name="busqueda">
                    </input>
                    <input type="submit" value="Buscar"></input>
                </div>

                <ul>
                    <li><a href="../../../public/index.html">Inicio</a></li>

                    <li><a href="../../App.js/.UserSection">Producto</a></li>

                    <li><a href="https://www.google.com">Nosotros</a></li>

                    <li><a href="https://www.google.com">Preguntas frecuentes</a></li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default NavBar;