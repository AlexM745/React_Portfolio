import React from "react"
import logo from "../assets/logo.svg"



const Navbar = () => {
    return (
        <nav className="navbar">
            <div>NAV Bar</div>
            <img src={logo}alt="logo" className="logo" />
            <div className="menu"></div>
            
            <button className="menuBtn">
                <img src="" alt="" /> Contact Me
            </button> 

        </nav>
    )
}

export default Navbar