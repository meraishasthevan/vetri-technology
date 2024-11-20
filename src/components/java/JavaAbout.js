import React from "react";
import "./JavaAbout.css";
import javaImage from "../images/java-full4.jpg"; 

function JavaAbout() {
  return (
    <div id="java">
      <h1 className="main-heading">About Course</h1>
      <div className="java-about">
        <div className="java-about-container">
          <div className="about-content">
            <h2 className="about-title">Java Full Stack Developer</h2>
            <p className="about-description">
              A Java Full Stack Developer is proficient in both front-end and back-end technologies, specializing in Java for back-end development. This role involves building robust, scalable, and secure applications for modern enterprises.
            </p>
            <ul className="about-points-java">
              <li>
                <strong>Core Java Expertise:</strong> Mastery in Java fundamentals, OOP concepts, and Java 8+ features.
              </li>
              <li>
                <strong>Frameworks:</strong> Spring Boot, Hibernate, and Microservices architecture.
              </li>
              <li>
                <strong>Front-End Technologies:</strong> Proficiency in Angular, React, or Vue.js.
              </li>
              <li>
                <strong>Database Skills:</strong> Experience with SQL, PostgreSQL, and NoSQL databases.
              </li>
              <li>
                <strong>Deployment:</strong> Cloud platforms like AWS, Azure, and CI/CD pipelines.
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src={javaImage} alt="Java Developer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaAbout;
