import './profile.scss';
import { motion } from 'motion/react';

const Profile = () => {
    return (
        <motion.button 
            whileTap={{ scale: 0.95 }}
            className='profile-btn'
        >


        </motion.button>
    );
};

export default Profile;