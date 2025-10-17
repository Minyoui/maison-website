import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'

//Components
import Navbar from './components/navbar/navbar';

//Pages

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;

