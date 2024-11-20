import React, { useState, useEffect } from "react";
import './Python.css';
import py1 from '../images/py-banner1.jpg';
import py2 from '../images/py-banner4.jpg';
import py3 from '../images/py-banner6.jpg';

function Python() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [py1, py2, py3];

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 4000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="python-container">
            <div className="carousel-container">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="carousel-img"
                    style={{ borderRadius: '20px' }}
                />
                <div className="carousel-controls">
                    <button onClick={prevImage} className="carousel-btn prev-btn">&#10094;</button>
                    <button onClick={nextImage} className="carousel-btn next-btn">&#10095;</button>
                </div>
            </div>
        </div>
    );
}

export default Python;
