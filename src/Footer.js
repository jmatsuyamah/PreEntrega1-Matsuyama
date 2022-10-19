import React from "react"
import Nav from "./Nav"

const Footer = () => {
    return (
        <footer>
            <div className="redes">
                <a href="https://www.facebook.com/">facebook</a>
                <a href="https://www.instagram.com/">instagram</a>
                <a href="https://www.twitter.com/">twitter</a>
            </div>
            <div>
                <p>© 2020 - Todos os direitos reservados</p>
            </div>
            <div>
                <Nav/>
            </div>
        </footer>
    )
}

export default Footer