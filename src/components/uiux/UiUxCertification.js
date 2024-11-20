import React from "react";
import './UiUxCertification.css';
import certi from '../Carousel_Images/certificate.00c0bf2d87b1ad3921e4.png';

function UiUxCertification() {
    return (
        <div id="certificate"> 
            <div className="uiux-certification-container">
                <h1>Certification</h1>
                <h4>
                    VTS provides you a training completion certificate with an online verification code.
                    Once training is complete at VTS, you will receive a guaranteed internship with our own IT organisation,
                    Vetri IT Systems Private Limited.
                </h4>
                <div className="uiux-certification-img">
                    <img src={certi} alt="Certification" />
                </div>
              
            </div>
        </div>
    );
}

export default UiUxCertification;
