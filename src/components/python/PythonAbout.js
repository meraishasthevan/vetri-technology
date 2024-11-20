import React from 'react';
import './PythonAbout.css';
import python from '../images/py-banner2.jpg';

function PythonAbout() {
  return (
    <div id='py-about'>
      <h1 className="section-title">About Course</h1>
      <div className="about-section">
        <div className="python-about-container">
          <div className="about-image-py">
            <img src={python} alt="Python Developer" />
          </div>
          <div className="about-content">
            <h1 className="about-title">Python Full Stack Developer</h1>
            <p className="about-description">
              A Full Stack Developer is someone who can develop both client and server software. A Python full stack developer uses Python to design, code, test, and deploy applications.
            </p>
            <div className="about-points">
              <p><strong>Key Skills:</strong></p>
              <ul>
                <li><i className="fas fa-cogs"></i> Back-end Development (Python, Django, Flask)</li>
                <li><i className="fas fa-laptop-code"></i> Front-end Technologies (HTML, CSS, JavaScript)</li>
                <li><i className="fas fa-database"></i> Database Management (SQL, PostgreSQL, MongoDB)</li>
                <li><i className="fas fa-plug"></i> RESTful API Development</li>
                <li><i className="fas fa-code-branch"></i> Version Control (Git)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PythonAbout;
