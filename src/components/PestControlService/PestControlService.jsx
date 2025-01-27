import React from 'react';
import { Helmet } from 'react-helmet'; 
import { NAME } from '../../constants/constants';
import Services from '../Services/Services';
import ServicesAreas from '../ServicesAreas/ServicesAreas';
import Faq from '../FAQ/FAQ';
import Map from '../Map/Map';

const PestControlService = ({ city, service }) => {
  // SEO Title and Description
  const seoTitle = service
    ? `${service.charAt(0).toUpperCase() + service.slice(1)} Control Services in ${city}`
    : `Pest Control Services in ${city}`;
  
  const seoDescription = service
    ? `Looking for ${service} control services in ${city}? Get expert pest control services for your home or business.`
    : `Pest control services in ${city} to ensure your property remains safe and pest-free. Contact our team of experts today!`;

  // Content section based on city or service
  const serviceDescription = service
    ? `Our ${service} control services in ${city} are designed to provide lasting solutions. We use safe and effective methods tailored to the needs of your property.`
    : `We offer comprehensive pest control services in ${city}, including prevention and treatment for all common pests. Our experts provide quick and reliable services for homes and businesses.`;

  return (
    <div>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      <section className="pest-control-service-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h1>{seoTitle}</h1>
            <p>{serviceDescription}</p>

            <p>
              Pest infestations are a common problem faced by homeowners and businesses alike. Whether it’s cockroaches in your kitchen, rodents in your attic, or termites damaging your property, pests can pose serious health and safety risks. Fortunately, pest control services in {city} provide effective solutions to manage and eliminate pest problems, ensuring a safe and clean environment for your family, employees, and customers.
            </p>

            <p>
              At {NAME}, we offer comprehensive pest control services in {city} tailored to meet the needs of both residential and commercial properties. With years of experience in the industry, our team of experts is equipped with the knowledge and tools to deal with any pest problem you may encounter.
            </p>

            <h2>Why You Need Pest Control Services in {city}</h2>
            <p>
              There are numerous reasons why pest control services in {city} is essential for your property. Pests, while often small in size, can have a big impact on your health, comfort, and the integrity of your home or business. Here’s why you should consider professional pest control services in {city}:
            </p>

            <ul>
              <li><strong>Health Hazards:</strong> Pests like cockroaches, rats, and mosquitoes can carry harmful bacteria and viruses.</li>
              <li><strong>Property Damage:</strong> Termites, rodents, and other pests can cause significant damage to your property.</li>
              <li><strong>Peace of Mind:</strong> A pest infestation can cause significant stress and anxiety.</li>
              <li><strong>Preventative Measures:</strong> Professional pest control services in {city} provide long-term solutions and prevent future problems.</li>
            </ul>

            <h2>Our Pest Control Services in {city}</h2>
            <p>
              At {NAME}, we offer a wide range of pest control services in {city} designed to address different types of infestations. Our expert team provides comprehensive solutions for both common and specialized pests. Here are some of the most popular pest control services in {city} we provide:
            </p>

            <ul>
              <li><strong>Cockroach Control:</strong> Professional solutions for eliminating cockroaches from your home or business.</li>
              <li><strong>Rodent Control:</strong> We provide safe and effective methods to remove and prevent rodents from your property.</li>
              <li><strong>Termite Control:</strong> Protect your property from termites with our comprehensive termite control services.</li>
              <li><strong>Spider Control:</strong> Safe and efficient spider control services to protect your home from unwanted arachnids.</li>
              <li><strong>Fly Control:</strong> Effective fly control solutions to ensure your space remains free of pests.</li>
              <li><strong>Bee Control:</strong> Protect your property from bee infestations with our expert control services.</li>
              <li><strong>Ant Control:</strong> Effective solutions for controlling and eliminating ants from your home.</li>
              <li><strong>Bed Bug Control:</strong> Professional services to eliminate bed bugs and ensure a peaceful night’s sleep.</li>
              <li><strong>Mosquito Control:</strong> Eliminate mosquitoes and prevent them from breeding on your property.</li>
              <li><strong>Wildlife Control:</strong> Safely remove and prevent wildlife from invading your home or business.</li>
            </ul>

            <h2>How Our Pest Control Services in {city} Work</h2>
            <p>
              At {NAME}, we follow a systematic approach to pest control services in {city}, ensuring the best results for our customers. Here’s how our pest control services in {city} typically work:
            </p>
            <ul>
              <li><strong>Inspection:</strong> Our first step is to conduct a thorough inspection of your property to identify the type of pest infestation and its extent.</li>
              <li><strong>Treatment:</strong> Based on the inspection results, we will implement the appropriate treatment to eliminate the pests.</li>
              <li><strong>Prevention:</strong> After eliminating the pests, we implement preventive measures to ensure that they don’t return.</li>
              <li><strong>Follow-up:</strong> We may schedule follow-up visits to ensure that the pest problem is completely resolved.</li>
            </ul>

            <h2>Why Choose {NAME} for Your Pest Control Needs?</h2>
            <p>
              Choosing the right pest control company is crucial for ensuring the safety and well-being of your home or business. Here’s why {NAME} is the best choice for your pest control needs:
            </p>
            <ul>
              <li><strong>Expertise and Experience:</strong> Our team of pest control experts has years of experience in handling various types of pest infestations.</li>
              <li><strong>Environmentally Friendly Solutions:</strong> Our pest control methods are safe for your family, pets, and the planet.</li>
              <li><strong>Customized Plans:</strong> We offer customized pest control plans tailored to your specific needs.</li>
              <li><strong>Reliable and Professional:</strong> We pride ourselves on being punctual, professional, and reliable.</li>
              <li><strong>Affordable Pricing:</strong> Our pest control services are affordable and provide excellent value for money.</li>
              <li><strong>Satisfaction Guarantee:</strong> If pests return after our treatment, we’ll re-treat your property at no additional cost.</li>
            </ul>

            <h2>Contact Us Today</h2>
            <p>
              Don’t wait for pests to take over your property. Contact { NAME } today for reliable pest control services in {city}. Our expert team is ready to help you eliminate pests and prevent future infestations. Let us provide you with a safe and pest-free environment!
            </p>
          </div>
        </div>
        <Services />
        <ServicesAreas />
        <Faq />
        <Map />
      </section>
    </div>
  );
};

export default PestControlService;
