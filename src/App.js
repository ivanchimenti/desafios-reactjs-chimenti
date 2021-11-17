import React, { Fragment } from "react";
import './App.css';

import NavBar from "./components/NavBar";

/* 
SI QUEREMOS DEVOLVER MAS DE UN ELEMENTO JSX DEBEMOS UTILIZAR UN DIV O UN FRAGMENT

PARA INTERPOLAR CODIGO DE JS DENTRO DEL CODIGO DE JSX DEBO UTILIZAR LAS LLAVEZ {}
*/

const styles = {
  p: {
    color: "blue",
    fontSize: 10
  }
};

function App() {

  let name = "Ivan";
  let city = "Tapiales";

  return (
   <Fragment>
     <NavBar/>
       <div className="App">
          <h1 style={{color:"red", backgroundColor: "yellow"}}>
          Bienvenidos a la clase de JSX!
          </h1>
          <h2>
            Mi nombre es {name} y soy {city}
          </h2>
          <p style={styles.p}>Mi number is {38/2}</p>
       </div>

       <div className="container">
          <h2>No entiendo mucho por el momento</h2>
       </div>
   </Fragment>
  );
}

export default App;
