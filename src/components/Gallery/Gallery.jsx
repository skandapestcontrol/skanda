import React from 'react';

// Gallery data array
const galleryItems = [
  {
    image: 'assets/images/gallery/1.jpeg',
    title: 'Gallery Image 1',
    description: 'Description for gallery image 1.',
    link: 'gallery-image-1.html',
  },
  {
    image: 'assets/images/gallery/2.jpeg',
    title: 'Gallery Image 2',
    description: 'Description for gallery image 2.',
    link: 'gallery-image-2.html',
  },
  {
    image: 'assets/images/gallery/3.jpeg',
    title: 'Gallery Image 3',
    description: 'Description for gallery image 3.',
    link: 'gallery-image-3.html',
  },
  // Add more items as necessary
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Our Gallery</div>
          <h2>Explore Our Work</h2>
        </div>
        <div className="row">
          {galleryItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 gallery-item">
              <div className="inner-box">
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
                {/*
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                
                <div className="link-btn">
                  <a href={item.link} className="theme-btn btn-style-one">
                    <span>View Details</span>
                  </a>
                </div>
                 */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
