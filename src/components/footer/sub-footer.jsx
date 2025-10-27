import './sub-footer.scss';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';


//Assets 
import Image from '../../assets/images/woman-in-spa.png';
import Wellness from '../../assets/images/wellness-journey.png';

const SubFooter = () => {
    const navigate = useNavigate();

    return (
        <div className='sub-footer'>
            <img src={Wellness} alt="Ready to begin your Wellness Journey?" className="wellness-header" loading='lazy' />
            <motion.button 
                type="button"
                whileHover={{scale: 1.05, boxShadow: "0 10px 10px rgba(0,0,0,0.3)"}}
                whileTap={{scale: 0.95, boxShadow: "0 3px 3px rgba(0,0,0,0.3)"}}
            >
                Book Now
            </motion.button>
            <motion.img whileHover={{scale: 1.1}} src={Image} className='woman-in-spa' alt="Vector Image of a Woman in Spa" loading='lazy' />
        </div>
    );
};

export default SubFooter;