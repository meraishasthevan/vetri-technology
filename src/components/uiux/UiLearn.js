import React from 'react';
import './UiLearn.css';

function UiLearn() {
  return (
    <div id="learn">
      <div className="uiux-learn-container">
        <h1 className="uiux-learn-title">Why Learn UI/UX?</h1>
        <div className="uiux-learn-grid">
          <div className="uiux-learn-card">
            <div className="icon">🎨</div>
            <h2>Better Designs</h2>
            <p>Learn to create designs that are functional, beautiful, and user-focused.</p>
            <p><strong>Design Trends:</strong> Stay updated with the latest design trends in UI/UX.</p>
            <p><strong>Tools to Learn:</strong> Figma, Sketch, Adobe XD, and more.</p>
          </div>

          <div className="uiux-learn-card">
            <div className="icon">💼</div>
            <h2>UI/UX Designer Careers</h2>
            <p>Explore opportunities with top companies hiring UI/UX designers.</p>
            <p><strong>Average Salary:</strong> ₹4,00,000 - ₹12,00,000 per year in India.</p>
            <p><strong>Job Roles:</strong> Product Designer, Interaction Designer, UX Researcher.</p>
          </div>

          <div className="uiux-learn-card">
            <div className="icon">⚡</div>
            <h2>Develop Faster</h2>
            <p>Streamline app, website, and product development with better design systems.</p>
            <p><strong>Efficiency Boost:</strong> Save time by focusing on design sprints.</p>
            <p><strong>Development Collaboration:</strong> Work closely with developers to bring designs to life.</p>
          </div>

          <div className="uiux-learn-card">
            <div className="icon">🌍</div>
            <h2>Improve Accessibility</h2>
            <p>Make digital experiences inclusive for people with diverse needs.</p>
            <p><strong>Standards to Follow:</strong> WCAG, ARIA, and accessibility guidelines.</p>
            <p><strong>Inclusive Design:</strong> Learn to create for users with disabilities and challenges.</p>
          </div>

          <div className="uiux-learn-card">
            <div className="icon">📈</div>
            <h2>Boost Growth</h2>
            <p>Design experiences that drive engagement and conversions for businesses.</p>
            <p><strong>Key Metrics:</strong> Measure success with analytics, A/B testing, and user feedback.</p>
            <p><strong>Customer-Centric:</strong> Design with the customer journey and satisfaction in mind.</p>
          </div>

          <div className="uiux-learn-card">
            <div className="icon">🎓</div>
            <h2>Solid Foundation</h2>
            <p>Master user research, prototyping, and usability testing for professional growth.</p>
            <p><strong>Research Skills:</strong> Learn how to gather and analyze user data effectively.</p>
            <p><strong>Prototyping Tools:</strong> Use tools like InVision and Marvel for rapid prototyping.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UiLearn;
