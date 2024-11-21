import React from "react";
import './UiAbout.css';
import uiux from '../images/Graphic-Design-Course.webp';

function UiAbout() {
    return (
        <div id="about" className="uiux-container">
            <div className="uiux-header">
                <h1>About UI-UX Design Trainings</h1>
            </div>

            <div className="uiux-about">
                <div className="uiux-image">
                    <img src={uiux} alt="UI/UX" />
                </div>
                
                <div className="uiux-about-content">
                    <h2>UI/UX Designing Beginners Trainings Overview</h2>
                    <h3>A UI/UX design course for beginners can teach you the principles and skills needed to create user-friendly digital products. Some topics you may learn in a UI/UX design trainings include:</h3>
                    <ul className="uiux-about-items">
                        <li><span>User research: </span>How to understand user needs and goals through interviews, surveys, and other research</li>
                        <li><span>Wireframing: </span>How to create low-fidelity layouts to outline a design's structure and functionality</li>
                        <li><span>Prototyping: </span>How to create high-fidelity representations of a user interface</li>
                        <li><span>Usability testing: </span>How to test the usability of a design</li>
                        <li><span>Information architecture: </span>How to organize and structure content to improve navigation</li>
                        <li><span>Sitemaps: </span>How to create a visual representation of a website's structure</li>
                        <li><span>User flows: </span>How to depict the paths users take to achieve their goals</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UiAbout;
