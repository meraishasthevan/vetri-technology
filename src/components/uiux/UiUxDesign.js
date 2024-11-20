import React, { useState, useEffect } from "react";
import './UiUxDesign.css';
import ui1 from '../Carousel_Images//imgpsh_fullsize_anim-48.webp';
import ui2 from '../Carousel_Images/ui-ux-ban.avif';
import ui3 from '../Carousel_Images/ui-ux-banner.jpg';


function UiUxDesign() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ui1, ui2, ui3];

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

export default UiUxDesign;
