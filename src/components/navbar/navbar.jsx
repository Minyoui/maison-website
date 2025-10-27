import './navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

//Assets
import Arrow from '../../assets/icons/arrow-up-right.svg';
import TextLogo from '/maison-d-text-logo.svg';
import ProfileIcon from '../../assets/icons/profile-icon.png';

//Components
import Button from '../button/buttonOne';
import Menu from '../button/menu';
import Profile from '../button/profile';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    //Navbar Scroll Identifier
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 80); //Threshold
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation
    const toLogin = () => {
        navigate("/Login");
    };

    return (
        <div className={`navbar-wrapper ${scrolled? 'scrolled':''}`}>
            <nav role="navigation" className={`navbar-container ${isMenuOpen? 'opened':''}`}>
                <ul className='navbar-links'>              
                    <li><Link to="/"><img src={TextLogo} alt="Maison`D Home Button" id="navbar-home-btn"/></Link></li>
                    
                    <div className='navigation-links'>
                        <li><a href="#home">HOME<div className='underline'/></a></li>
                        <li><a href="">PRODUCTS</a></li>
                        <li><a href="">FAQs<div className='underline'/></a></li>
                        <li><a href="#contact">CONTACT US<div className='underline'/></a></li>
                    </div>
                    <li id="register">
                        {user ? (
                            <Button>
                                My Profile
                                <img src={ProfileIcon} aria-hidden="true" loading='lazy'/>
                            </Button>
                        ) : (
                            <Button onClick={toLogin}>
                                Sign-up / Sign-in 
                                <img src={Arrow} aria-hidden="true" loading='lazy' id="Arrow"/>
                            </Button>
                        )}
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
                        {user ? (
                            <Button onClick={toLogin}>
                                Welcome! {user.firstName}
                                <img src={Arrow} aria-hidden="true" loading='lazy'/>
                            </Button>
                        ) : (
                            <Button onClick={toLogin}>
                                Sign-up / Sign-in 
                                <img src={Arrow} aria-hidden="true" loading='lazy'/>
                            </Button>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;