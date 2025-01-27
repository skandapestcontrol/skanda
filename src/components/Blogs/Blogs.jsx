import React from 'react';
import {NAME } from '../../constants/constants';
const Blogs = () => {
  return (
    <section className="blog-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">News & Articles</div>
          <h2>Stay Updated with {NAME}</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 news-block-one">
            <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
              <div className="image">
                <a href="blog-details.html">
                  <img src="assets/images/resource/news-1.jpg" alt="Blog Post 1" />
                </a>
              </div>
              <div className="category">Pest Control</div>
              <h4><a href="blog-details.html">How to Keep Your Home Safe from Termites</a></h4>
              <div className="post-meta">
                By <a href="#"><span> Eva Green</span></a> - <a href="#">October 13, 2020</a>
              </div>
              <div className="text">Learn the best practices for preventing termites in your home.</div>
              <div className="link-btn">
                <a href="blog-details.html" className="theme-btn btn-style-one style-two">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 news-block-one">
            <div className="inner-box wow fadeInUp" data-wow-duration="1500ms">
              <div className="image">
                <a href="blog-details.html">
                  <img src="assets/images/resource/news-2.jpg" alt="Blog Post 2" />
                </a>
              </div>
              <div className="category">Pest Control</div>
              <h4><a href="blog-details.html">Dealing with Rodent Infestations Effectively</a></h4>
              <div className="post-meta">
                By <a href="#"><span> Eva Green</span></a> - <a href="#">October 13, 2020</a>
              </div>
              <div className="text">Effective strategies for controlling rodent problems in your home or business.</div>
              <div className="link-btn">
                <a href="blog-details.html" className="theme-btn btn-style-one style-two">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 news-block-one">
            <div className="inner-box wow fadeInDown" data-wow-duration="1500ms">
              <div className="image">
                <a href="blog-details.html">
                  <img src="assets/images/resource/news-3.jpg" alt="Blog Post 3" />
                </a>
              </div>
              <div className="category">Pest Control</div>
              <h4><a href="blog-details.html">The Importance of Professional Pest Control Services</a></h4>
              <div className="post-meta">
                By <a href="#"><span> Eva Green</span></a> - <a href="#">October 13, 2020</a>
              </div>
              <div className="text">Why opting for professional pest control services can save you time and money.</div>
              <div className="link-btn">
                <a href="blog-details.html" className="theme-btn btn-style-one style-two">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
