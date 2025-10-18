import './sub-hero.scss';

//Assets
import Massage from '../../../assets/images/massage-vector.png';
import Leaves from '../../../assets/images/leave-stem.svg';

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
                                    text={["Trusted ❤️", "Relaxing 😌", "Affordable 🤑"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter="|"
                                /></strong>
                        Spa in Kawit, Cavite
                    </h1>
                </div>
                <img src={Massage} id="massage-woman" style={{ width: "350px", marginRight: "100px"}}alt="Masseuse giving back massage to woman" loading='lazy'/>
            </div>
        </div>
    );
};

export default SubHero;