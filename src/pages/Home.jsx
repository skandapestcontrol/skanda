import React from 'react'
import Hero from '../components/Hero/Hero'
import AboutUs from '../components/Aboutus/Aboutus'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Testimonials from '../components/Testimonials/Testimonials'
import FunFacts from '../components/FunFacts/FunFacts'
import Blogs from '../components/Blogs/Blogs'
import Map from '../components/Map/Map'
import ServicesAreas from '../components/ServicesAreas/ServicesAreas'
import Gallery from '../components/Gallery/Gallery'
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Testimonials />
      <FunFacts />
      <Gallery />
      <ServicesAreas />
      <Blogs />
      <Map />
    </div>
  )
}

export default Home
