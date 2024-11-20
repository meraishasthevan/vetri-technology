import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import './Navbar.css';
import { FaPython, FaJava, FaPaintBrush } from "react-icons/fa";
import logo from '../components/images/VTS_Logo_page-0001-removebg-preview (1).png';

function Navbar() {
    const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

    const toggleMegaMenu = () => {
        setMegaMenuOpen((prevState) => !prevState);
    };

    return (
        <div className="fixed-top">
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="VTS Logo" />
            </div>

            <div className="navbar-links">
                <a href="#vts-process" className="nav-link">VTS Process</a>

                <div className="nav-link mega-menu" onClick={toggleMegaMenu}>
                    <span>Our Trainings</span>
                    {isMegaMenuOpen && (
                        <div className="mega-menu-content">
                            <Link to="/python" className="mega-item">
                                <FaPython className="icon" />
                                Python Full Stack
                            </Link>
                            <Link to="/java" className="mega-item">
                                <FaJava className="icon" />
                                Java Full Stack
                            </Link>
                            <Link to="/ui-ux" className="mega-item">
                                <FaPaintBrush className="icon" />
                                UI/UX Designing
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
