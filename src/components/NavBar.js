import React, { Fragment } from "react";
import './NavBar.css';
import logo from './logo512.png';

const NavBar = () => {

    return(
        <Fragment>
            <nav className="container navbar">
                <img src={logo}/>
                
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
                    <li><a href="https://www.google.com">Inicio</a></li>

                    <li><a href="https://www.google.com">Producto</a></li>

                    <li><a href="https://www.google.com">Nosotros</a></li>

                    <li><a href="https://www.google.com">Preguntas frecuentes</a></li>
                </ul>
            </nav>
        </Fragment>
    )
};

export default NavBar;