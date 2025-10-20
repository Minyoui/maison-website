import './footer.scss';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

//Components 
import Button from '../button/buttonOne';

//Assets
import Logo from '/MD-footer-logo.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import Tiktok from '../../assets/icons/TikTok.svg';


const Footer = () => {
    const category = {
        FAQs: [
            {
                topic: 'Appointment',
                link: '',
                target: ''
            },
            {
                topic: 'Account',
                link: '',
                target: ''
            },
            {
                topic: 'Booking',
                link: '',
                target: ''
            }
        ],

        Sections: [
            {
                topic: 'Home',
                link: '#home',
                target: ''
            },
            {
                topic: 'About Us',
                link: '',
                target: '_blank'
            },
            {
                topic: 'Services',
                link: '#services',
                target:''
            },
            {
                topic: 'Gallery',
                link: '#gallery',
                target: ''
            },
            {
                topic: 'Reviews',
                link: '#reviews',
                target: ''
            },
            {
                topic: 'Contact Us',
                link: '#contact',
                target: ''
            }
        ],

        Products: [
            {
                topic: '',
                link: '',
                target: ''
            }
        ]
    };

    const socials = [
        {social:'Facebook', link:'https://www.facebook.com/profile.php?id=100092370982090', icon:Facebook, label:'Facebook'},
        {social:'Instagram', link:'https://www.instagram.com/blissfulbalispa_kawit/', icon:Instagram, label:'Instagram'},
        {social:'TikTok', link:'https://www.tiktok.com/@blissfulbalikawit', icon:Tiktok, label:'TikTok'}
    ];

    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <img src={Logo} alt="Maison`D Spa Logo" className="footer-logo" loading='lazy'/>
                {Object.entries(category).map(([categories, lists]) => (
                    <ul key={categories} className='footer-category'>
                        <p>{categories}</p>
                        {lists.map((list, index) => (
                            <li key={index}>
                                <a href={list.link} target={list.target}>
                                    {list.topic}
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
                <div className='newsletter-social'>
                    <form className='newsletter'>
                        <label for="email">Subscribe to our Newsletter!</label>
                        <div className='newsletter-form-box'>
                            <input name="email" type="email" id="newsletter-email" placeholder="Enter your email" required/>
                            <Button>Submit</Button>
                        </div>
                    </form>
                    <div className='socials'>
                        <p>Follow us on our Socials!</p>
                        {socials.map (item => (
                            <a key={item.social} href={item.link} target="_blank">
                                <img src={item.icon} alt={item.label} loading='lazy'/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <p className='footer-license'>Copyright © Maison`D 2025. All rights reserved. Icons by <a href="https://icons8.com/" target="_blank"><strong>Icons8</strong></a></p>
        </div>
    );
};

export default Footer;