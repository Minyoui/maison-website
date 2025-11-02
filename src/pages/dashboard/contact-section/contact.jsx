import './contact.scss';
import { motion } from 'motion/react';

//Components
import Header from '../../../components/header/header';

//Assets
import Location from '../../../assets/icons/Location.png';
import Clock from '../../../assets/icons/Clock.png';

const Contact = () => {
    const infoData = [
        {
            id: 'info1',
            information: 'Address',
            description: '2nd floor ASJ building Brgy. Batong Dalig Centennial Road, Kawit, Philippines'
        },

        {
            id: 'info2',
            information: 'Phone',
            description: '(+63)926 098 4659'
        },

        {
            id: 'info3',
            information: 'Email',
            description: 'blissfulbalispakawit@gmail.com'
        },

        {
            id: 'info4',
            information: 'Operating Hours'
        }
    ]

    return (
        <main className='contact-section' id='contact'>
            <div className='contact-left-content'>
                <Header 
                    title="Find Us"
                    subtitle="Escape to tranquility and discover your path to wellness. We're here to guide you on your journey to complete relaxation."
                />
                <motion.div 
                    className='location'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img src={Location} aria-hidden="true" loading='lazy'/>
                    <p>2nd floor ASJ building Brgy. Batong Dalig Centennial Road, Kawit, Philippines</p>
                </motion.div>

                <motion.div 
                    className='Operating-hours'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={Clock} aria-hidden="true" loading="lazy"/>
                    <p>Operating Hours</p>
                </motion.div>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8779436181617!2d120.89792227496571!3d14.434196881129324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3202c5fda6d%3A0xb5917b21eb4b9fa1!2sBlissful%20Bali%20Spa%20-%20Kawit!5e0!3m2!1sen!2sph!4v1755930184407!5m2!1sen!2sph" 
                width="100%" 
                style={{ border:0 }}
                allowfullscreen
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Spa Location"
            ></iframe>
        </main>
    );
};

export default Contact;
