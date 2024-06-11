import React from "react"
import logo from "../assets/logo.svg"



const navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo}alt="logo" />
            <div className="menu"></div>
            <button className="menuBtn">
                <img src="" alt="" /> Contact Me
            </button> 

        </nav>
    )
}

export default navbar;