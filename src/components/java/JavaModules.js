import React, { useState } from "react";
import "./JavaModules.css";

const modules = [
  {
    title: "Core Java (12 days)",
    details: [
      "Introduction to Java",
      "OOP Concepts",
      "Exception Handling",
      "Multithreading",
      "Collections Framework",
    ],
  },
  {
    title: "Advanced Java (20 days)",
    details: [
      "Java Servlets",
      "JSP (Java Server Pages)",
      "MVC Architecture",
      "Session Management",
    ],
  },
  {
    title: "Spring Framework (10 days)",
    details: [
      "Spring Core",
      "Spring Boot",
      "Spring MVC",
      "Dependency Injection",
      "RESTful APIs with Spring",
    ],
  },
  {
    title: "Hibernate (15 days)",
    details: [
      "ORM Concepts",
      "Hibernate Configuration",
      "Mapping and Relationships",
      "Query Language (HQL)",
    ],
  },
  {
    title: "Microservices (20 days)",
    details: [
      "Introduction to Microservices",
      "Spring Cloud",
      "Service Registry and Discovery",
      "Load Balancing with Ribbon",
      "API Gateway with Zuul",
    ],
  },
];

function JavaModules() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="java-modules-container">
      <h1 className="java-modules-header">Java Full Stack Developer Syllabus</h1>
      <div className="accordion">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`accordion-item ${index === activeIndex ? "active" : ""}`}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{module.title}</h2>
              <span className="accordion-icon">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            <div
              className="accordion-content"
              style={{
                maxHeight:
                  index === activeIndex
                    ? document.querySelectorAll(".accordion-content")[index]
                        ?.scrollHeight + "px"
                    : "0",
              }}
            >
              <ul>
                {module.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JavaModules;
