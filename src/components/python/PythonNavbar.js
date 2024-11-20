import React, { useEffect, useState } from "react";
import './PythonNavbar.css';

function PythonNavbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.nav-sec');
            if (navbar) {
                const navbarTop = navbar.offsetTop; 
                setIsSticky(window.scrollY >= navbarTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className={`nav-sec ${isSticky ? 'sticky' : ''}`}>
                <div className="py-nav-container">
                    <div className="logo">
                        <h1>Full Stack Developer <span>Python</span></h1>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li><a href="#py-about">About Course</a></li>
                            <li><a href="#skills">Skills You Learn</a></li>
                            <li><a href="#py-modules">Technical Modules</a></li>
                            <li><a href="#certificate">Certification</a></li>
                            <li><a href="#py-learn">Why Learn Python?</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default PythonNavbar;
