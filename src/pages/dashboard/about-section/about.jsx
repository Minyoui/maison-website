import './about.scss';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

//Assets
import AbtImage from '../../../assets/images/MD-About-Image.jpg';

//Components
import Button from '../../../components/button/buttonTwo';

const About = () => {
    return (
        <main className='about-section'>
            <motion.div 
                className='about-left-content'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}

            >
                <h1 style={{ color: "#fff"}}> HELLO </h1>
            </motion.div>

            <div className='about-right-content'>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >The Most <span>Trusted</span> Spa in Kawit, Cavite</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >Maison`D is a sanctuary of relaxation, offering authentic balinese spa treatments designed to heal and rejuvenate</motion.p>
                <Button>Learn More</Button>
            </div>
        </main>
    );
};

export default About;