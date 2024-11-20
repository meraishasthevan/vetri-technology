import React, { useState, useEffect } from "react";
import './Java.css';
import java1 from '../images/java-full1.jpg';
import java2 from '../images/java-full2.jpg';
import java3 from '../images/java-ful3.jpg';


function Java() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [java1, java2, java3];

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
      <div className="uiux-container">
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

export default Java;
