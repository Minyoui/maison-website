import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

//Components
import Navbar from './components/navbar/navbar';

//Pages
import Hero from './pages/dashboard/hero-section/hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;

