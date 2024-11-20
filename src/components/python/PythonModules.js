import React, { useState } from "react";
import './PythonModules.css';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase , FaGithub} from 'react-icons/fa';

function PythonModules() {
  const [activeDay, setActiveDay] = useState(null);

  const toggleAccordion = (index) => {
    setActiveDay(activeDay === index ? null : index);
  };

  return (
    <div id='py-modules'>
    <div className="python-modules-container">
      <h1 className="modules-title">Python Full Stack Developer Syllabus</h1>

      <div className="accordion-day">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <h2>Introduction to Python (3 Days)</h2>
          <span className="accordion-icon">{activeDay === 1 ? '-' : '+'}</span>
        </div>
        {activeDay === 1 && (
          <div className="accordion-content">
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Setting up Python Development Environment</p>
            </div>
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Basic Syntax, Variables, and Data Types</p>
            </div>
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Control Flow: If, Else, Loops</p>
            </div>
          </div>
        )}
      </div>

      <div className="accordion-day">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <h2>HTML & CSS Fundamentals (12 Days)</h2>
          <span className="accordion-icon">{activeDay === 2 ? '-' : '+'}</span>
        </div>
        {activeDay === 2 && (
          <div className="accordion-content">
            <div className="module-item">
              <FaHtml5 className="module-icon" />
              <p>HTML5 Basics: Structure and Tags</p>
            </div>
            <div className="module-item">
              <FaCss3Alt className="module-icon" />
              <p>CSS3 Styling: Flexbox, Grid</p>
            </div>
            <div className="module-item">
              <FaCss3Alt className="module-icon" />
              <p>Responsive Design Principles</p>
            </div>
          </div>
        )}
      </div>

      <div className="accordion-day">
        <div className="accordion-header" onClick={() => toggleAccordion(3)}>
          <h2>JavaScript & DOM (8 Days)</h2>
          <span className="accordion-icon">{activeDay === 3 ? '-' : '+'}</span>
        </div>
        {activeDay === 3 && (
          <div className="accordion-content">
            <div className="module-item">
              <FaJs className="module-icon" />
              <p>JavaScript Basics: Variables and Functions</p>
            </div>
            <div className="module-item">
              <FaJs className="module-icon" />
              <p>DOM Manipulation and Event Handling</p>
            </div>
          </div>
        )}
      </div>

      <div className="accordion-day">
        <div className="accordion-header" onClick={() => toggleAccordion(4)}>
          <h2>Back-End with Django (7 Days)</h2>
          <span className="accordion-icon">{activeDay === 4 ? '-' : '+'}</span>
        </div>
        {activeDay === 4 && (
          <div className="accordion-content">
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Setting Up Django Project</p>
            </div>
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Creating Models, Views, and Templates</p>
            </div>
            <div className="module-item">
              <FaDatabase className="module-icon" />
              <p>Database Integration with Django ORM</p>
            </div>
        
            </div>
        )}
      </div>

      <div className="accordion-day">
        <div className="accordion-header" onClick={() => toggleAccordion(5)}>
          <h2>Full Stack Development (7 Days)</h2>
          <span className="accordion-icon">{activeDay === 5 ? '-' : '+'}</span>
        </div>
        {activeDay === 5 && (
          <div className="accordion-content">
            <div className="module-item">
              <FaJs className="module-icon" />
              <p>Connecting Front-End with Back-End</p>
            </div>
            <div className="module-item">
              <FaPython className="module-icon" />
              <p>Authentication and Authorization</p>
            </div>
            <div className="module-item">
              <FaDatabase className="module-icon" />
              <p>Building RESTful APIs</p>
            </div>
            <div className="module-item">
              <FaGithub className="module-icon" />
              <p>Deployment and Version Control (Git)</p>
            </div>
          </div>
        )}
      </div>

    </div>
    </div>
  );
}

export default PythonModules;
