import './navbar.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Assets
import Arrow from '../../assets/icons/arrow-up-right.svg';
import TextLogo from '/maison-d-text-logo.svg';

//Components
import Button from '../button/buttonOne';
import Menu from '../button/menu';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

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
            <nav className={`navbar-container ${isMenuOpen? 'opened':''}`}>
                <ul className='navbar-links'>              
                    <li><a href="/"><img src={TextLogo} alt="Maison`D Home Button" id="navbar-home-btn"/></a></li>
                    
                    <div className='navigation-links'>
                        <li><a href="#home">HOME<div className='underline'/></a></li>
                        <li><a href="">PRODUCTS</a></li>
                        <li><a href="">FAQs<div className='underline'/></a></li>
                        <li><a href="#contact">CONTACT US<div className='underline'/></a></li>
                    </div>
                    <li id="register">
                        <Link to="/Login">
                            <Button>
                                Sign-up / Sign-in 
                                <img src={Arrow} aria-hidden="true" loading='lazy'/>
                            </Button>
                        </Link>
                    </li>

                    <Menu onToggle={setMenuOpen}/>
                </ul>

                {/* IF NAVBAR IS IN MENU MODE */}
                <div className='navbar-dashboard'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                    <div className='account-info'>
                        <Link to="/Login">
                            <Button>
                                Sign-up / Sign In
                                <img src={Arrow} aria-hidden="true" loading='lazy'/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;