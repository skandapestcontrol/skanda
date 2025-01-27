import React from 'react';
import {NAME} from '../../constants/constants';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="content">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo.png" alt="Aditya Sri Cargo Packers and Movers" />
              </a>
            </div>
            <ul className="social-icon">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
            <div className="footer-menu">
              <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="footer-content text-center">
          <p className="stylecolor">© {NAME} Services Pvt Ltd - {currentYear}. & Created by <a href="https://www.anuhyadigital.com" target="_blank" rel="noopener noreferrer">Anuhya Digital</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
