import './header.scss';
import { motion } from 'motion/react';

function Header ({ title, subtitle }) {
    return (
        <div className='spa-header'>
            <motion.h1 
                className='spa-title'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >{title}</motion.h1>
            <motion.div 
                initial={{ width: "0px" }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='spa-title-divider'/>
            <motion.p 
                className='spa-subtitle'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >{subtitle}</motion.p>
        </div>
    );
};

export default Header;