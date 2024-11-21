import React from "react";
import './JavaLearn.css';
import { FaJava, FaMoneyBillWave, FaBriefcase, FaBook, FaLaptopCode, FaCertificate } from 'react-icons/fa'; 

function JavaLearn() {
    return (
        <div className="java-learn-container">
            <h1 className="section-title">Why Learn Java?</h1>
            <div className="content-wrapper">
                <div className="content-item">
                    <FaJava className="icon" />
                    <h3>Master Java Programming</h3>
                    <p>Start your journey with Java, one of the most powerful and versatile programming languages. Learn object-oriented programming, data structures, and algorithms.</p>
                </div>

                <div className="content-item">
                    <FaBriefcase className="icon" />
                    <h3>Career Opportunities</h3>
                    <p>Java developers are in high demand. With skills in Java, you can work in various industries, including finance, healthcare, and e-commerce.</p>
                </div>

                <div className="content-item">
                    <FaMoneyBillWave className="icon" />
                    <h3>Attractive Salary</h3>
                    <p>Java developers can earn competitive salaries. On average, Java developers in the US make over $100,000 annually, depending on experience and location.</p>
                </div>

                <div className="content-item">
                    <FaBook className="icon" />
                    <h3>Learning Resources</h3>
                    <p>Access a wide range of online courses, tutorials, books, and videos to deepen your Java knowledge. Explore platforms like Udemy, Coursera, and edX.</p>
                </div>

                <div className="content-item">
                    <FaLaptopCode className="icon" />
                    <h3>Java in Web Development</h3>
                    <p>Java is widely used in backend development, especially with frameworks like Spring Boot. Learn how Java powers web applications at scale.</p>
                </div>

                <div className="content-item">
                    <FaCertificate className="icon" />
                    <h3>Certifications</h3>
                    <p>Get certified in Java development to enhance your resume. Oracle offers certification exams to help you become a recognized Java expert.</p>
                </div>
            </div>
        </div>
    );
}

export default JavaLearn;
