import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MiniHeader from '../components/MiniHeader/MiniHeader';
import MiniFooter from '../components/MiniFooter/MiniFooter';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { WHATSAPP } from '../constants/constants';
import CallAndWhatsApp from '../components/CallAndWhatsApp/CallAndWhatsApp';

const Layout = () => {
  return (
    <div className="layout">
      <MiniHeader/>
      <Header />
      <main className="main" id="top">
        <Outlet />
      </main>
      <MiniFooter />
      <CallAndWhatsApp />
      <Footer /> 
      <ScrollToTop />
      
    </div>
  )
}

export default Layout
