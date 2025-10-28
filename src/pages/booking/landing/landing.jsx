import './landing.scss';
import { useNavigate } from 'react-router-dom';

//Assets

//Components
import Button from '../../../components/button/buttonOne';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className='landing-wrapper'>
            {/* ONSITE SERVICE */}
            <div className='service-option'>
                <h1>Onsite Service</h1>
                <p>Immerse yourself in our tranquil spa environment. Enjoy our full range of facilities and treatments in our beautifully designed wellness center.</p>
                <Button onClick={() => navigate("/Onsite-Form")}>Choose</Button>
            </div>

            {/* HOME SERVICE */}
            <div className='service-option'>
                <h1>Home Service</h1>
                <p>Experience luxury spa treatments in the comfort of your own home. Our certified therapists bring premium equipment and products directly to you.</p>
                <Button>Choose</Button>
            </div>
            <button className="cancel-btn" onClick={() => navigate("/")}>CANCEL</button>
        </div>
    );
};

export default Landing;