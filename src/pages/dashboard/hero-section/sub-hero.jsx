import './sub-hero.scss';
import { motion } from 'motion/react';

//Assets
import Massage from '../../../assets/images/massage-vector.png';
import Leaves from '../../../assets/images/leave-stem.svg';
import Heart from '../../../assets/icons/Heart.svg';
import Star from '../../../assets/icons/Star.svg';
import Approval from '../../../assets/icons/Approval.svg';

//Components
import TextType from '../../../components/react-bits/text-type/TextType';

const SubHero = () => {
    return (
        <div className='sub-hero-section'>
            <div className='sh-container'>
                <img src={Leaves} aria-hidden="true" loading="lazy" className='leaves'/>
                <div className='sh-header'>
                    <h1>
                        The Most <strong><TextType 
                                    text={["Trusted", "Relaxing", "Affordable"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter=" "
                                /></strong>
                        Spa in Kawit, Cavite
                    </h1>
                    <div className='sh-icons'>
                        <motion.img whileHover={{ scale: 1.2 }} src={Heart} aria-hidden="true" loading='lazy'/>
                        <motion.img whileHover={{ scale: 1.2 }} src={Star} aria-hidden="true" loading='lazy'/>
                        <motion.img whileHover={{ scale: 1.2 }} src={Approval} aria-hidden="true" loading='lazy'/>
                    </div>
                </div>
                <img src={Massage} id="massage-woman" style={{ width: "350px", marginRight: "100px"}}alt="Masseuse giving back massage to woman" loading='lazy'/>
            </div>
        </div>
    );
};

export default SubHero;