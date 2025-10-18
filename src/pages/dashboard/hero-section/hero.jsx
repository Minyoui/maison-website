import './hero.scss';

//Assets
import MDLogo from '/maison-d-main-logo.svg';

//Components
import Button from '../../../components/button/buttonOne';

const Hero = () => {
    return (
        <div className='hero-section'>
            <img src={MDLogo} alt="Maison`D Business Logo" loading='lazy'/>
            <Button>Book Now</Button>
        </div>
    );
};

export default Hero;