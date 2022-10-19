import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"


function App() {

    const handleClick = (test) => {
        console.log("click")
        console.log(test)
    }

    return (
        <>
            <Header
                nombre="Horacio"
                apellido="Gutierrez"
                edad={33}
                callback={handleClick}
            />
            <Main />
            <Footer />
        </>
    )
}

export default App