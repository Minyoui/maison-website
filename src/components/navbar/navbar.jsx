import './navbar.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Assets
import Arrow from '../../assets/icons/arrow-up-right.svg';
import TextLogo from '/maison-d-text-logo.svg';

//Components
import Button from '../button/buttonOne';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    //Navbar Scroll Identifier
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 80); //Threshold
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar-wrapper ${scrolled? 'scrolled':''}`}>
            <nav className='navbar-container'>
                <ul className='navbar-links'>
                    <li><a href="/"><img src={TextLogo} alt="Maison`D Home Button" id="navbar-home-btn"/></a></li>
                    <div className='navigation-links'>
                        <li><a href="#home">HOME<div className='underline'/></a></li>
                        <li><a href="">PRODUCTS</a></li>
                        <li><a href="">FAQs<div className='underline'/></a></li>
                        <li><a href="#contact">CONTACT US<div className='underline'/></a></li>
                    </div>
                    <li><Button>Sign-up / Sign-in <img src={Arrow} aria-hidden="true" loading='lazy'/></Button></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;