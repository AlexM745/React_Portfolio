
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { Link } from "react-router-dom";

// this is the nav bar section of the page.

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        // nav container
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">

            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scroll(0, 0);
                    }} >
                    <img src={logo} alt="logo" className=" w-9 h-9 object-contain" />
                    <p className="text-white text-[20px] font bold cursor-pointer">Alexis Merino</p>

                {/* The Navigaton links */}

                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-9">
                    <li className="text-secondary text-[21px] font-medium cursor-pointer">
                        {[
                            ["About", "#about"],
                            ["Portfolio", "#portfolio"],
                            ["Experience", "#experience"],
                            ["Contact", "#contact"],
                        ].map(([title, url]) => (
                            <a href={url} className="hover:text-white  p-4">{title}</a>
                        ))}
                    </li>
                </ul>

                {/* Menue icon */}

                <div>
                    <img src={toggle ? close :menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar