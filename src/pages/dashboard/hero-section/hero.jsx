import './hero.scss';

//Assets
import MDLogo from '/maison-d-main-logo.svg';

//Components
import Button from '../../../components/button/buttonOne';

const Hero = () => {
    return (
        <header className='hero-section' id="home" role='banner'>
            <img src={MDLogo} alt="Maison`D Business Logo" fetchPriority='high'/>
            <Button>Book Now</Button>
        </header>
    );
};

export default Hero;