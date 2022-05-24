import React from "react"
import logo from "../images/logo.png"
import wallet from "../images/wallet.png"
import ham from "../images/hamMenu.png"
import {Container} from "reactstrap"

export default function Navbar() {
    return (
            <Container>
        <nav>

            <img src={logo} className="nav--logo"  alt="main-logo"/>
            <h3 className="nav--title">OpenSea</h3>
            <input className="nav--input" type="text" placeholder ="&#xf002; Search.." />
            <img src={wallet} className="nav--rightLogo" alt="wallet-logo"/>
            <img src={ham} className="nav--rightLogo hammLogo" alt="menu-logo"/>
            
        </nav>
        </Container>
    )
}