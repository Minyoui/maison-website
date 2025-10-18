import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

//Components
import Navbar from './components/navbar/navbar';

//Pages
import Hero from './pages/dashboard/hero-section/hero';

const SubHero = React.lazy(() => import ('./pages/dashboard/hero-section/sub-hero'))

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}/>
      <SubHero />
    </>
  );
};

export default App;

