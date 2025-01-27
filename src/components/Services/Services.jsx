import React from 'react';

// Service data array
const services = [

  {
    icon: 'flaticon-mosquito',
    title: 'Bed Bug Control',
    description: 'Professional services to eliminate bed bugs and ensure a peaceful night’s sleep.',
    link: 'bed-bug-control.html',
  },
  {
    icon: 'flaticon-termite',
    title: 'Termites Control',
    description: 'Protect your property from termites with our comprehensive termite control services.',
    link: 'termites-control.html',
  },
  {
    icon: 'flaticon-cockroach',
    title: 'Cockroach Control',
    description: 'Professional solutions for eliminating cockroaches from your home or business.',
    link: 'cockroach-control.html',
  },
  {
    icon: 'flaticon-tarantula',
    title: 'Spiders Control',
    description: 'Safe and efficient spider control services to protect your home from unwanted arachnids.',
    link: 'spiders-control.html',
  },
  {
    icon: 'flaticon-squirrel',
    title: 'Rodents Control',
    description: 'We provide safe and effective methods to remove and prevent rodents from your property.',
    link: 'rodents-control.html',
  },
  {
    icon: 'flaticon-fly',
    title: 'Fly Control',
    description: 'Effective fly control solutions to ensure your space remains free of pests.',
    link: 'fly-control.html',
  },
  {
    icon: 'flaticon-bee',
    title: 'Bee Control',
    description: 'Protect your property from bee infestations with our expert control services.',
    link: 'bee-control.html',
  },
  {
    icon: 'flaticon-ant',
    title: 'Ant Control',
    description: 'Effective solutions for controlling and eliminating ants from your home.',
    link: 'ant-control.html',
  },
];

const Services = () => {
  return (
    <section className="services-section style-two">
      <div className="auto-container">
        <div className="wrapper-box">
          <span className="shape-three">
            <img src="assets/images/shape/shape-6.png" alt="Shape" />
          </span>
          <span className="shape-four">
            <img src="assets/images/shape/shape-7.png" alt="Shape" />
          </span>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 service-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className={service.icon}></span>
                  </div>
                  <h4>
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <div className="text">{service.description}</div>
                  <div className="link-btn">
                    <a href={service.link} className="theme-btn btn-style-one style-two">
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
