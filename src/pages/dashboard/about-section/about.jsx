import './about.scss';

//Assets
import AbtImage from '../../../assets/images/MD-about-img.jpg';

const About = () => {
    return (
        <div className='about-section'>
            <div className='about-header'>
                <h1>
                    Experience Calm, Curated with Luxurious Care
                </h1>
                <p>
                    Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate
                </p>
            </div>
            <a className='abt-image' href="" target='_blank'>
                <img src={AbtImage} alt="Maison`D therapist serving a client" loading='lazy'/>
            </a>
        </div>
    );
};

export default About;