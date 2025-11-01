import './sub-hero.scss';

//Components
import TextType from '../../../components/react-bits/text-type/TextType';

const SubHero = () => {
    return (
        <div className='sub-hero-section'>
            <div className='sh-container'>
                <div className='sh-header'>
                    <h1>
                        The Most <TextType 
                                    text={["Trusted ❤️", "Relaxing 😌", "Affordable 🤑"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter=""
                                />
                        Spa in Kawit, Cavite
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SubHero;