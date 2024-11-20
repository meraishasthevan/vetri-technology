import React, { useState } from "react";
import './TechnicalModules.css';

function TechnicalModules() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const syllabus = [
        {
            title: "Introduction to UI/UX Design",
            duration: "(3 Days)",
            topics: [
                "Overview of Graphics, UI, and UX",
                "Basics of UI and UX",
                "User-centered design (UCD) approach",
                "Usability principles and accessibility",
            ],
        },
        {
            title: "Getting Started with UI/UX Design",
            duration: "(5 Days)",
            topics: [
                "Why learn UI/UX design?",
                "Understanding UI and UX design",
                "Design Thinking and Google Material Design",
            ],
        },
        {
            title: "UI Design",
            duration: "(10 Days)",
            topics: ["Principles of UI Design", "Tools for UI Design", "Wireframing and Prototyping"],
        },
        {
            title: "UX Design",
            duration: "(8 Days)",
            topics: ["What is UX Design?", "Empathy and user research", "Usability testing and iterations"],
        },
    ];

    return (
        <div className="syllabus-container">
            <h1 className="syllabus-title">Technical Modules</h1>
            <p className="syllabus-subtitle">Explore the key topics covered in our comprehensive UI/UX design program.</p>

            <div className="accordion">
                {syllabus.map((module, index) => (
                    <div
                        className={`accordion-item-uiux ${activeIndex === index ? "active" : ""}`}
                        key={index}
                    >
                        <div
                            className="accordion-header-uiux"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h2>{module.title}</h2>
                            <span>{module.duration}</span>
                        </div>
                        <div
                            className="accordion-body"
                            style={{ display: activeIndex === index ? "block" : "none" }}
                        >
                            <ul>
                                {module.topics.map((topic, idx) => (
                                    <li key={idx}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnicalModules;
