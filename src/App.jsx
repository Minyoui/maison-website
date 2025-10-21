import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

//Components
import Navbar from './components/navbar/navbar';
const Footer = React.lazy(() => import ('./components/footer/footer'))
const SubFooter = React.lazy(() => import ('./components/footer/sub-footer'))

//Pages
import Hero from './pages/dashboard/hero-section/hero';
const SubHero = React.lazy(() => import ('./pages/dashboard/hero-section/sub-hero'))
const About = React.lazy(() => import ('./pages/dashboard/about-section/about'))
const Services = React.lazy(() => import ('./pages/dashboard/services-section/services'))
const Gallery = React.lazy(() => import ('./pages/dashboard/gallery-section/gallery'))
const Review = React.lazy(() => import ('./pages/dashboard/review-section/review'))
const Contact = React.lazy(() => import ('./pages/dashboard/contact-section/contact'))

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}/>
      <SubHero />
      <About />
      <Services />
      <Gallery />
      <Review />
      <Contact />
      <SubFooter />
      <Footer />
    </>
  );
};

export default App;

