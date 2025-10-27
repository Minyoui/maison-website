import './hero.scss';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

//Assets
import MDLogo from '/maison-d-main-logo.svg';
import ProfileIcon from '../../../assets/icons/profile-icon.png';

//Components
import Button from '../../../components/button/buttonOne';
import TextType from '../../../components/react-bits/text-type/TextType';

const Hero = () => {
    const { user } = useContext(AuthContext);

    return (
        <header className='hero-section' id="home" role='banner'>
            <img src={MDLogo} alt="Maison`D Business Logo" fetchPriority='high'/>
            {user ? (
                <div className='welcome-header-container'>
                    <div>
                        <TextType 
                                    text={[`Welcome ${user.firstName}! You are one step away to relaxation ❤️`]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter=""
                                />
                    </div>
                    <button
                        type="button"
                    >Book Now</button>
                </div>
            ) : (
                <Button>Book Now</Button>
            )}
        </header>
    );
};

export default Hero;