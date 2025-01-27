import React from 'react';
import {NAME } from '../../constants/constants';
const AboutUs = () => {
  return (
    <section className="about-us-section pt-0">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-wrapper">
              <span className="shape-one">
                <img src="assets/images/shape/shape-2.png" alt="Shape" />
              </span>
              <span className="shape-two">
                <img src="assets/images/shape/shape-3.png" alt="Shape" />
              </span>
              <div className="image wow fadeInDown" data-wow-duration="1500ms">
                <img src="assets/images/resource/1.jpg" alt="Pest Control" />
              </div>
              <div className="years-of-experience" data-parallax='{"y": 50}'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="349px" height="359px">
                  <defs>
                    <filter filterUnits="userSpaceOnUse" id="Filter_0" x="0px" y="0px" width="349px" height="359px">
                      <feOffset in="SourceAlpha" dx="-28.284" dy="28.284" />
                      <feGaussianBlur result="blurOut" stdDeviation="7.746" />
                      <feFlood floodColor="rgb(37, 59, 112)" result="floodOut" />
                      <feComposite operator="atop" in="floodOut" in2="blurOut" />
                      <feComponentTransfer><feFuncA type="linear" slope="0.03" /></feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <g filter="url(#Filter_0)">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                      d="M287.000,30.999 L117.000,30.999 C100.431,30.999 87.000,44.429 87.000,60.998 L87.000,270.999 L287.000,240.999 C303.464,238.598 317.000,227.567 317.000,210.999 L317.000,60.998 C317.000,44.429 303.569,30.999 287.000,30.999 Z" />
                  </g>
                </svg>
                <h4>20</h4>
                <div className="text">Years of Experience</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-block wow fadeInUp" data-wow-duration="1500ms">
              <div className="sec-title mb-20">
                <div className="sub-title">About {NAME}</div>
                <h2>Best Pest Control Services in Bengaluru</h2>
              </div>
              <div className="text">
                {NAME} has been providing professional pest management solutions for over 20 years, ensuring homes and businesses stay pest-free. We use eco-friendly and safe methods to eliminate pests from your surroundings.
              </div>
              <ul className="list">
                <li>Effective pest control solutions for homes and businesses.</li>
                <li>Certified professionals with years of experience.</li>
                <li>Eco-friendly and safe pest control treatments.</li>
              </ul>
              <div className="link-btn">
                <a href="services.html" className="theme-btn btn-style-one">
                  <span>Find Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
