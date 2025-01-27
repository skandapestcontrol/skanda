import React from 'react';
import {NAME, PHONE, PHONE_URL} from '../../constants/constants';
const Hero = () => {
  return (
    <div>
      <section className="banner-section-two">
        <div className="sec-bg" style={{ backgroundImage: 'url(assets/images/main-slider/shape-1.png)' }}></div>
        <div className="shape-one"></div>
        <div className="content-outer">
          <div className="content-box">
            <div className="inner">
              <h1>Protecting <br /> Your Home <br /> from Pests</h1>
              <div className="text">Professional pest control services for your peace of mind.</div>
              <div className="link-box">
                <a href="contact.html" className="theme-btn btn-style-one">
                  <span>Call us for Appointment</span>
                </a>
              </div>
            </div>
            <div className="image-wrapper">
              {/* 
              <span className="shape-two">
                <img src="assets/images/shape/shape-2.png" alt="Pest Control Shape" />
              </span>
              <span className="shape-three">
                <img src="assets/images/shape/shape-3.png" alt="Pest Control Shape" />
              </span>
              */}
              <div className="image">
                <div className="bg" style={{ backgroundImage: 'url(assets/images/resource/x.jpg)' }}></div>
                <img src="assets/images/resource/1.png" alt="Pest Control" />
              </div>
              <div className="contact-number">
                <h5>{NAME}</h5>
                <div className="number">
                  <a href= {PHONE_URL}>{PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
