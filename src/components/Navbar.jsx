
import React, {useEffect, useState} from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

// this is the nav bar section of the page.

const Navbar = () => {
    const [active, setActive] = useState('');

    return (
        // nav container
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">

            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2"
                onClick={()=>{
                    setActive("");
                    window.scroll(0,0);
                }} >
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
                    <p className="text-white text-[18] font bold cursor-pointer">Alexis Merino</p>
                    
                </Link>
            </div>
        </nav>
    )
}

export default Navbar