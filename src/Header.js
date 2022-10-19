import React from "react"
import Nav from "./Nav"

function Header(prop) {
    
    //prop.callback(["test", "test2"])

    let nombreCompleto = prop.nombre + " " +  prop.apellido

    return (
        <header id="main-header" className="header">
            <h1>titulo</h1>
            <p>Bienvenido {nombreCompleto}!</p>
            <button onClick={prop.callback}>click</button>
            <Nav/>
        </header>
    )
}

export default Header