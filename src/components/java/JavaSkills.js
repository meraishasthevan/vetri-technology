import React, { useState } from "react";
import Slider from "react-slick";
import './JavaSkills.css';

const skills = [
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Spring Framework", icon: "🍃", color: "#63a69f" },
  { name: "Hibernate", icon: "🗄️", color: "#4caf50" },
  { name: "RESTful APIs", icon: "🌐", color: "#f44336" },
  { name: "SQL", icon: "💻", color: "#2196f3" },
  { name: "Maven", icon: "⚙️", color: "#8e24aa" },
  { name: "JUnit", icon: "✅", color: "#ff4081" },
  { name: "Git", icon: "🔗", color: "#f05033" },
];

function JavaSkills() {
  const [showSkills, setShowSkills] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="java-skills-container">
      {!showSkills ? ( 
        <div className="question-container">
          <h1 className="question-title">
            Are you ready to master these skills?
          </h1>
          <p className="question-subtitle">
            Unleash your creativity and embark on a journey to master Java!
          </p>
          <button
            className="motivation-button"
            onClick={() => setShowSkills(true)} 
          >
            Yes, I'm Ready!
          </button>
        </div>
      ) : (
        <div>
          <h1 className="motivational-message">
            <span className="highlight">You are ready to learn!</span><br />
            Embrace your journey with these amazing Java Skills
          </h1>
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="java-skill-box" style={{ backgroundColor: skill.color }}>
                <div className="java-skill-icon">
                  {skill.icon}
                </div>
                <h2 className="java-skill-name">{skill.name}</h2>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default JavaSkills;
