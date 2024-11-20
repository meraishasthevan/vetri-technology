import React from "react";
import './PythonSkills.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';  

function PythonSkills() {
  return (
    <div id='skills'>
    <div className="python-skills-container">
      <h2 className="skills-title">Skills You'll Learn</h2>
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
    </div>
  );
}

export default PythonSkills;
