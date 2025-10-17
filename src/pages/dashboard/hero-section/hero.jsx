import './hero.scss';

//Components
import Button from '../../../components/button/buttonOne';

const Hero = () => {
    return (
        <div className='hero-section'>
            <Button>Book Now</Button>
        </div>
    );
};

export default Hero;