import React from "react"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"

// this is the nav bar information.

const Navbar = () => {
    return (
        <nav className="">
            <img src={logo}alt="logo" className="logo" />
            <div className="menu"></div>
            <Link className="menuListItem">Home</Link>
            <Link className="menuListItem">About</Link>
            <Link className="menuListItem">Portfolio</Link>
            <Link className="menuListItem">Experience</Link>
            <button className="menuBtn">
                <img src="" alt="" /> Contact Me
            </button> 

        </nav>
    )
}

export default Navbar