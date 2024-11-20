import React from "react";
import './UiUxSkills.css';

import skills1 from '../Carousel_Images/skills-uiux1.jpg';
import skills2 from '../Carousel_Images/skills-uiux2.avif';
import skills3 from '../Carousel_Images/skills-uiux3.jpeg';
import skills4 from '../Carousel_Images/uiux-skill-interaction2.avif';
import skills5 from '../Carousel_Images/skills-uiux5.jpg';
import skills6 from '../Carousel_Images/skills-uiux6.jpeg';

function UiUxSkills(){
    return(
      <div id="skill">
      <div className="uiux-skills-container">
        <h1>Skills You'll Learn</h1>
        <div className="uiux-skills">
          <div className="uiux-skills-items">
            <img src={skills1} alt="Information architecture" />
            <h2>Information architecture</h2>
          </div>
          <div className="uiux-skills-items">
            <img src={skills2} alt="Wireframing" />
            <h2>Wireframing</h2>
          </div>
          <div className="uiux-skills-items">
            <img src={skills3} alt="Collaboration" />
            <h2>Collaboration</h2>
          </div>
          <div className="uiux-skills-items">
            <img src={skills4} alt="Interaction design" />
            <h2>Interaction design</h2>
          </div>
          <div className="uiux-skills-items">
            <img src={skills5} alt="Usability testing" />
            <h2>Usability testing</h2>
          </div>
          <div className="uiux-skills-items">
            <img src={skills6} alt="Problem solving" />
            <h2>Problem solving</h2>
          </div>
        </div>
      </div>
    </div>
    
    )
}
export default UiUxSkills;