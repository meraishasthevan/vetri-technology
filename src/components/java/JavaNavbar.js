import React, { useEffect, useState } from "react";
import './JavaNavbar.css';

function JavaNavbar() {
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
                <div className="uiux-nav-container">
                    <div className="logo">
                        <h1>Full Stack Developer <span>Java</span></h1>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li><a href="#about">About Course</a></li>
                            <li><a href="#skill">Skills You Learn</a></li>
                            <li><a href="#modules">Technical Modules</a></li>
                            <li><a href="#certificate">Certification</a></li>
                            <li><a href="#learn">Why Learn Java?</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default JavaNavbar;
