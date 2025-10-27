import './profile.scss';
import { motion } from 'motion/react';

const Profile = ({ children }) => {
    return (
        <div className='profile-wrapper'>
            <div className='profile-container'>
                <h1>{children}</h1>
            </div>
        </div>
    );
};

export default Profile;