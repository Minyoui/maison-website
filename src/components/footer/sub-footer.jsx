import './sub-footer.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';


const SubFooter = () => {
    const navigate = useNavigate();

    return (
        <div className='sub-footer'>
            <motion.div 
                className='sub-footer-container'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <p className='header'>Reservation</p>
                <div className='content'>
                    <h1>
                        Book Your Luxury Balinese Massage Now
                    </h1>
                    <p>Escape, Relax, Rejuvenate, Anytime, Anywhere</p>
                    <div className='lower-content'>
                        <p className='title'>Easy Booking in Just Seconds</p>
                        <div className='information'>
                            <div className='tag'>
                                <span>Call Us</span>
                                <p>(+63)926 098 4659</p>
                            </div>

                            <div className='tag'>
                                <span></span>
                            </div>

                            <div className='tag'>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SubFooter;