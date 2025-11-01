import './hero.scss';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <header className='hero-section' id="home" role='banner'>
            <div className='hero-container'>
                <h1>Experience Calm Curated with <span>Luxurious</span> Care</h1>
                <p>Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate</p>
                <Button>
                    Make an appointment
                </Button>
            </div>
        </header>
    );
};

export default Hero;      