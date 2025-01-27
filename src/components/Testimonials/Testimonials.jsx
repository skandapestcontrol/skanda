import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Check the screen width and set the state for desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust this breakpoint as per your requirement
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const testimonials = [
    {
      name: 'Arun Kumar',
      location: 'Bangalore',
      rating: 5,
      testimonial:
        'Skanda Pest Control provided quick and effective solutions for our cockroach problem. Their service was excellent, and their team was professional and friendly. Highly recommend!',
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore',
      rating: 4,
      testimonial:
        'The termite control service was incredibly effective. We haven’t seen any signs of termites since their visit. The team was thorough, and they walked us through every step of the process.',
    },
    {
      name: 'Rajesh Patel',
      location: 'Bangalore',
      rating: 5,
      testimonial:
        'Skanda Pest Control was prompt, efficient, and thorough. The rodent control service they provided was top-notch, and we haven’t had any issues since. A great experience overall!',
    },
    {
      name: 'Neha Rao',
      location: 'Bangalore',
      rating: 4,
      testimonial:
        'The fly control service was excellent! Skanda Pest Control quickly resolved our issue, and we’ve seen a noticeable difference. The staff was professional, and the service was affordable.',
    },
    {
      name: 'Suresh Reddy',
      location: 'Bangalore',
      rating: 5,
      testimonial:
        'I highly recommend Skanda Pest Control for their bee control services. They safely removed the hive and ensured no bees returned. The team was knowledgeable and friendly.',
    },
  ];

  return (
    <section className="services-section style-two">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Customer Testimonials</div>
          <h2>What Our Customers Say</h2>
        </div>
        {/* Conditionally apply flex class based on desktop screen */}
        <div className={`testimonials-container ${isDesktop ? 'flex' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item service-block-one">
              <div className="inner-box">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.location}</span>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="fa fa-star"></span>
                  ))}
                </div>
                <div className="testimonial-text">{testimonial.testimonial}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
