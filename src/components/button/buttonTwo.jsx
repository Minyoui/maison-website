import './buttonTwo.scss';
import { motion } from 'motion/react';

function Button ({ children, onClick }) {
    return (
        <motion.button
            className='buttonTwo'
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;