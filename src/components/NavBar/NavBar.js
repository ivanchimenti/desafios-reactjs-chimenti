import React, { Fragment } from "react";
import logo from './logo-champion.png';
import { Icon } from 'semantic-ui-react';
import './NavBar.css';
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { actBusq, busqueda } from  "../ItemListContainer/ItemListContainer";

const NavBar = () => {

    return(
        <Fragment>
            <nav className="container navbar">
                <img src={logo}/>

                <Icon name='cart arrow down' style={{fontSize: "5em", marginTop: "50px", color:"red"}}/>

                <div className="barraBusqueda">
                    {/* <input
                        type="text" onChange={actBusq}
                        value={busqueda}
                        placeholder="Buscar"
                        className="textField"
                        name="busqueda">
                    </input> 
                    <input type="submit" value="Buscar"></input> */}
                    {/* <input type="text" onChange={actBusq} value={busqueda}/> */}

                    <ItemListContainer/>
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