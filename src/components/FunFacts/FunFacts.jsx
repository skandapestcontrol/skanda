import React, { useEffect } from 'react';

const FunFacts = () => {
  useEffect(() => {
    // Initialize the counter functionality on mount
    const countTextElements = document.querySelectorAll('.count-text');
    countTextElements.forEach((countText) => {
      const updateCount = () => {
        let startValue = 0;
        const endValue = parseInt(countText.getAttribute('data-stop'), 10);
        const speed = parseInt(countText.getAttribute('data-speed'), 10);
        const increment = endValue / speed;

        const interval = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(interval);
            countText.innerText = endValue;
          } else {
            countText.innerText = Math.round(startValue);
          }
        }, 1);
      };
      updateCount();
    });
  }, []);

  return (
    <section className="funfacts-section" style={{ backgroundImage: 'url(assets/images/background/bg-1.jpg)' }}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-3 col-md-6 funfact-block-one">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed="3000" data-stop="25">0</span><span>+</span>
                </div>
                <div className="text">Years Experiences</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 funfact-block-one">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed="3000" data-stop="750">0</span>
                </div>
                <div className="text">Great Volunteers</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 funfact-block-one">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed="3000" data-stop="20">0</span><span>k+</span>
                </div>
                <div className="text">Satisfied Clients</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 funfact-block-one">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="count-outer count-box">
                  <span className="count-text" data-speed="3000" data-stop="30">0</span><span>+</span>
                </div>
                <div className="text">Awards Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
