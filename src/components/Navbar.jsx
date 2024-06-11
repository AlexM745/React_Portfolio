import React from "react"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

// this is the nav bar information.

const Navbar = () => {
    return (
        <nav className="w-full flex items-center py-5 fixed top-0 z-20">
            <img src={logo}alt="logo" className="logo" />
            <div className="menu"></div>
            <link></link>
            <button className="menuBtn">
                <img src="" alt="" /> Contact Me
            </button> 

        </nav>
    )
}

export default Navbar