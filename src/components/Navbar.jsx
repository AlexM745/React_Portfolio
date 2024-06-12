
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
                    <p className="text-white text-[16px] font bold cursor-pointer flex">Alexis Merino</p>

                    {/* The Navigaton links */}

                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    <li className="text-secondary text-[18px] font-medium cursor-pointer">
                        {[
                            ["About", "#about"],
                            ["Portfolio", "#portfolio"],
                            ["Experience", "#experience"],
                            ["Contact", "#contact"],
                        ].map(([title, url]) => (
                            <a href={url} className="hover:text-white  p-4"onClick={()=> {
                                setActive(title);
                            }}>{title}</a>
                        ))}
                    </li>
                </ul>

                {/* Menu icon */}

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }} />
                </div>
                {/* Menu */}

                <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>

                    <ul className="list-none flex justify-end items-start flex-col gap-4">

                        <li className="text-secondary font-Monserrat font-medium cursor-pointer text-[16px] ">
                            {[
                                ["About", "#about"],
                                ["Portfolio", "#portfolio"],
                                ["Experience", "#experience"],
                                ["Contact", "#contact"],
                            ].map(([title, url]) => (
                                <a href={url} className="hover:text-white p-1" 
                                onClick={()=> {
                                    setToggle(!toggle);
                                    setActive(title);
                                }}>{title}</a>
                            ))}
                        </li>
                    </ul>


                </div>

            </div>
        </nav>
    )
}

export default Navbar