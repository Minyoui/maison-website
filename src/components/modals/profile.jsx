import './profile.scss';
import { motion } from 'motion/react';

const Profile = ({ isOpen, onClose, children }) => {
    return (
        <div className={`profile-modal-wrapper ${isOpen? 'opened' : ''}`}>
            <div className='profile-modal-container'>
                <button type="button" className='close-btn' onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Profile;

