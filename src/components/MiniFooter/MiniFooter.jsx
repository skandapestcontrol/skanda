import React from 'react';
import {NAME, EMAIL, EMAIL_URL, PHONE, PHONE_URL, ADDRESS } from '../../constants/constants';
const MiniFooter = () => {
  return (
    <footer className="main-footer">
      <div className="upper-box">
        <div className="auto-container">
          <div className="row">
            {/* About Section */}
            <div className="col-lg-4 col-md-7">
              <div className="widget about-widget">
                <h4 className="widget_title">About {NAME}</h4>
                <div className="text">
                  {NAME} offers professional and eco-friendly pest control services to keep your home and business safe from pests.
                </div>
                <div className="copyright">
                  <a href="#">{NAME}</a> © 2024 All Rights Reserved
                </div>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-lg-2 col-md-6">
              <div className="widget links-widget">
                <h4 className="widget_title">Useful Links</h4>
                <div className="widget-content">
                  <ul className="list">
                    <li><a href="/about.html">About Us</a></li>
                    <li><a href="/services.html">Our Services</a></li>
                    <li><a href="#">Our Blog</a></li>
                    <li><a href="/contact.html">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Links Section */}
            <div className="col-lg-2 col-md-6">
              <div className="widget links-widget">
                <h4 className="widget_title">Our Services</h4>
                <div className="widget-content">
                  <ul className="list">
                    <li><a href="#">Bed Bug Control</a></li>
                    <li><a href="#">Bee Control</a></li>
                    <li><a href="#">Termites Control</a></li>
                    <li><a href="#">Rodents Control</a></li>
                    <li><a href="#">Cockroach Control</a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contact Section */}
            <div className="col-lg-3 offset-lg-1 col-md-6">
              <div className="widget contact-widget">
                <h4 className="widget_title">Contact Us</h4>
                <ul>
                  <li> {ADDRESS} </li>
                  <li><a href={ EMAIL }>{ EMAIL }</a></li>
                  <li><a href={ PHONE_URL }>{ PHONE }</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MiniFooter;
