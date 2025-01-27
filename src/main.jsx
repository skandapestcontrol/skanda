import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Importing pages and components
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import ErrorPage from './pages/Error/Error.jsx'
import AboutPageView from './pages/Aboutpage.jsx';
import ServicesPageView from './pages/ServicesPage.jsx';
import ContactPageView from './pages/ContactPage.jsx';
import WhyuspagePageView from './pages/WhyUsPage.jsx';
import PestControlService from './components/PestControlService/PestControlService.jsx'; // New Component for pest control services

// Importing city data
import cities from './data/locations'; // Assuming cities array is already available

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/about.html" element={<AboutPageView />} />
        <Route path="/services.html" element={<ServicesPageView />} />
        <Route path="/why-us.html" element={<WhyuspagePageView />} />
        <Route path="/contact.html" element={<ContactPageView />} />

        {/* Dynamic routes for Pest Control Services in each city */}
        {cities.map(city => {
          const formattedCity = city.toLowerCase().replace(/ /g, '-');
          return (
            <Route
              key={city}
              path={`/pest-control-services-in-${formattedCity}.html`}
              element={<PestControlService city={city} />}
            />
          );
        })}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
