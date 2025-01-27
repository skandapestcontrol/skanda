import React from 'react';
import locations from '../../data/locations';

const ServicesAreas = () => {
  return (
    <section className="services-location-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Pest Control Locations</div>
          <h2>Our Services Available in Bengaluru Locations</h2>
        </div>
        <div className="row">
          {locations.map((location, index) => {
            // Format the location name for the URL
            const formattedLocation = location.toLowerCase().replace(/ /g, '-');
            return (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <div className="location-item">
                  <p>
                    <a href={`/pest-control-services-in-${formattedLocation}.html`}>
                      Pest Control Services in {location}
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreas;
