import React, { useState, useEffect } from 'react';
import './CallAndWhatsApp.css';
import { WHATSAPP, PHONE_URL } from '../../constants/constants';
const CallAndWhatsApp = () => {
  const [showBubbles, setShowBubbles] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Show the button when user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);  // Button appears after scrolling 200px
    } else {
      setShowButton(false); // Button disappears if the scroll is less than 200px
    }
  };

  const handleToggleBubbles = () => {
    setShowBubbles(!showBubbles);  // Toggle bubbles visibility
  };

  const goHome = () => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  };

  // UseEffect to add and clean up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Floating Scroll to Top Button (WhatsApp and Call) */}
      {showButton && (
        <div className="floating-btn" onClick={handleToggleBubbles}>
          <i className="fab fa-comment-dots"> Contact us</i>
        </div>
      )}

      {/* Bubbles for WhatsApp and Call */}
      {showBubbles && (
        <div className="bubble-icons">
          {/* WhatsApp Icon */}
          <a
            href={WHATSAPP} // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-bubble"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* Call Icon */}
          <a href={PHONE_URL} className="call-bubble">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default CallAndWhatsApp;
