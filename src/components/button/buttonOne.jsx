import './buttonOne.scss';
import { motion } from 'motion/react';

function Button ({ children, onClick }) {
    return (
        <motion.button
            className='buttonOne'
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
        >
            {children}
        </motion.button>
    );
};

export default Button;