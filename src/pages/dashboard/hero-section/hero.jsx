import './hero.scss';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

//Assets
import MDLogo from '/maison-d-main-logo.svg';
import ProfileIcon from '../../../assets/icons/profile-icon.png';

//Components
import Button from '../../../components/button/buttonTwo';

const Hero = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const toBook = () => {
        navigate("/Booking");
    };

    return (
        <motion.header 
            className='hero-section' 
            id="home" 
            role='banner'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <motion.div 
                className='hero-container'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                
            >
                <h1>Experience Calm Curated with <span>Luxurious</span> Care</h1>
                <p>Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate</p>
                <Button>
                    Make an appointment
                </Button>
            </motion.div>
        </motion.header>
    );
};

export default Hero;      