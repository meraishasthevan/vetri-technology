import React, { useState } from 'react';
import './UiUxSkills.css';

import skills1 from '../Carousel_Images/skills-uiux1.jpg';
import skills2 from '../Carousel_Images/skills-uiux2.avif';
import skills3 from '../Carousel_Images/skills-uiux3.jpeg';
import skills4 from '../Carousel_Images/uiux-skill-interaction2.avif';
import skills5 from '../Carousel_Images/skills-uiux5.jpg';
import skills6 from '../Carousel_Images/skills-uiux6.jpeg';


function UiUxSkills() {
  const [showSkills, setShowSkills] = useState(false);

  const handleButtonClick = () => {
    setShowSkills(true);
  };

  return (
    <div id="skill">
      {!showSkills && (
        <div className="question-container">
          <h1 className="question-title">Ready to Explore Your Design Skills?</h1>
          <p className="question-subtitle">
            Unleash your creativity and embark on a journey to master UI/UX Design!
          </p>
          <button className="yes-button" onClick={handleButtonClick}>
            Yes, I'm Ready!
          </button>
        </div>
      )}

      {showSkills && (
        <div className="uiux-skills-container">
          <p className="motivational-message-uiux">
                Ready to learn these exceptional skills!<br/>
            <span className="highlight">"Design is intelligence made visible."</span> 
          </p>
          <div className="uiux-skills">
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img src={skills1} alt="Wireframing" />
                <h2>Wireframing</h2>
              </div>
            </div>
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img src={skills2} alt="Prototyping" />
                <h2>Prototyping</h2>
              </div>
            </div>
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img  src={skills3} alt="UI Design" />
                <h2>UI Design</h2>
              </div>
            </div>
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img  src={skills4} alt="UX Research" />
                <h2>UX Research</h2>
              </div>
            </div>
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img  src={skills5} alt="Interaction Design" />
                <h2>Interaction Design</h2>
              </div>
            </div>
            <div className="uiux-skills-items-wrapper">
              <div className="uiux-skills-items">
                <img  src={skills6} alt="User Testing" />
                <h2>User Testing</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UiUxSkills;
