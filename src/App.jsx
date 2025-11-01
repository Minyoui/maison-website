import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

//Components
import Navbar from './components/navbar/navbar';
const Footer = React.lazy(() => import ('./components/footer/footer'))
const SubFooter = React.lazy(() => import ('./components/footer/sub-footer'))
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

//Pages-Dashboard
import Hero from './pages/dashboard/hero-section/hero';
const About = React.lazy(() => import ('./pages/dashboard/about-section/about'))
const Services = React.lazy(() => import ('./pages/dashboard/services-section/services'))
const Gallery = React.lazy(() => import ('./pages/dashboard/gallery-section/gallery'))
const Review = React.lazy(() => import ('./pages/dashboard/review-section/review'))
const Contact = React.lazy(() => import ('./pages/dashboard/contact-section/contact'))


const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Suspense fallback={<div>Loading...</div>}/>
    <About />
    <Services />
  </>
);

//Pages-About
const AboutHero = React.lazy(() => import ('./pages/about/hero-section/hero'))
const AboutPage = () => (
  <>
    <Navbar />
    <AboutHero />
    <SubFooter />
    <Footer />
  </>
);

//Pages-Login
const Login = React.lazy(() => import ('./pages/login/login'))
//Pages-Register
const Register = React.lazy(() => import('./pages/register/register'))

//Pages-Booking
const Landing = React.lazy(() => import('./pages/booking/landing/landing'))
const OnsiteForm = React.lazy(() => import('./pages/booking/form/onsite-service/onsite'))


//MAIN APP
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/About" element={<AboutPage />}/>

        {/* Protected Group */}
        <Route element={<ProtectedRoute />}>
          <Route path="/Booking" element={<Landing />} />
          <Route path="/Onsite-Form" element={<OnsiteForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

