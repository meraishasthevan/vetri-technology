import React, { useState } from "react";
import './PythonSkills.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';

function PythonSkills() {
  const [showSkills, setShowSkills] = useState(false);

  const handleYesClick = () => {
    setShowSkills(true);
  };

  return (
    <div id="skills">
      {!showSkills ? (
        <div className="question-container">
          <h2 className="question-title">Are you ready to kickstart your learning journey?</h2>
          <p className="question-subtitle">Discover the skills that will set you apart and unlock endless possibilities in the tech world!</p>
          <button className="yes-button" onClick={handleYesClick}>OK, Let's Go!</button>
        </div>
      ) : (
        <div className="python-skills-container">
          <h3 className="motivational-message">You are ready to learn! <br /><span className="highlight">You must be intelligent to master these skills</span></h3>
          <p className="skills-subtitle">Below are the skills you’ll gain expertise in during your learning journey!</p>
          <div className="skills-list">
            <div className="skill-item">
              <FaPython className="skill-icon python-icon" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <FaHtml5 className="skill-icon html-icon" />
              <p>HTML5</p>
            </div>
            <div className="skill-item">
              <FaCss3Alt className="skill-icon css-icon" />
              <p>CSS3</p>
            </div>
            <div className="skill-item">
              <FaJs className="skill-icon js-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaNodeJs className="skill-icon node-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <FaDatabase className="skill-icon db-icon" />
              <p>Database (SQL, MongoDB)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PythonSkills;
