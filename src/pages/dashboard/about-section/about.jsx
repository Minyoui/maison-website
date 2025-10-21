import './about.scss';
import { Link } from 'react-router-dom';

//Assets
import AbtImage from '../../../assets/images/MD-about-img.jpg';

const About = () => {
    return (
        <main className='about-section'>
            <div className='about-header'>
                <h1>
                    Experience Calm, Curated with Luxurious Care
                </h1>
                <p>
                    Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate
                </p>
            </div>
            <Link className='abt-image' to="/About">
                <img src={AbtImage} alt="Maison`D therapist serving a client" loading='lazy'/>
            </Link>
        </main>
    );
};

export default About;