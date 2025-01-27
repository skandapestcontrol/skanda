import React from 'react'

const Map = () => {
  return (
    <div className="map">
      <iframe
      className="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9447.844872983285!2d77.62593089373719!3d13.049276095619321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19e179b194b5%3A0x6bb5ac64fb789a1c!2sThanisandra%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1734918401805!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: '0' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
    </div>
  )
}

export default Map