import './register.scss';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

//Components 
import Button from '../../components/button/buttonOne';

//Assets
import MDLogo from '/maison-d-main-logo.svg';

const Register = () => {
    const [isTCModalOpen, setTCModalOpen] = useState(false);
    const [isPPModalOpen, setPPModalOpen] = useState(false);

    return (
        <div className='register-wrapper'>
            <div className='register-background'>
                <img src={MDLogo} alt="Maison`D Spa Logo" fetchPriority='high'/>
                {/* MODAL */}

                {/* TERMS & CONDITIONS */}
                <div className={`terms-and-conditions ${isTCModalOpen? 'opened' : ''}`} id="TC">
                    <h1>Terms & Conditions</h1>
                    <p>Lorem Ipsum</p>
                    <motion.button 
                        type='button'
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setTCModalOpen(false)}
                    >
                        Close
                    </motion.button>
                </div>

                {/* PRIVACY POLICY */}
                <div className={`privacy-policy ${isPPModalOpen? 'opened' : ''}`} id="PP">
                    <h1>Privacy Policy</h1>
                    <p>Lorem Ipsum</p>
                    <motion.button 
                        type='button'
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setPPModalOpen(false)}
                    >
                        Close
                    </motion.button>
                </div>

            </div>
            <div className='register-container'>
                <h1>Register</h1>
                <form className='register-form'>
                    <div className='register-name'>
                        {/* FIRST NAME*/}
                        <div className='first-name'>
                            <label for="firstName">First Name</label>
                            <input 
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder='Your First Name'
                                required
                            />
                        </div>          
                        {/* LAST NAME*/}
                        <div className='last-name'>
                            <label for="lastName">Last Name</label>
                            <input 
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder='Your Last Name'
                                required
                            />
                        </div>
                        
                    </div>
                    <div className='register-bday-email'>
                        {/* EMAIL */}
                        <div className='email-address'>
                            <label for="email">Email Address</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Enter an email address'
                                required
                            />
                        </div>

                        {/* BIRTHDAY */}
                        <div className='birthday'>
                            <label for="birthday">Birthday</label>
                            <input 
                                type='date'
                                name="birthday"
                                id="birthday"
                                required
                            />
                        </div>
                    </div>
                    {/* PHONE */}
                    <label for="mobile">Phone Number</label>
                    <input 
                        type="tel"
                        name="mobile"
                        id="mobile"
                        placeholder='(+63)'
                        required
                    />
                    {/* PASSWORD */}
                    <label for="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Create a password'
                        required
                    />
                    {/* CONFIRM PASSWORD */}
                    <label for="confirm-password">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder='Re-enter password'
                        required
                    />
                    {/* TERMS & CONDITIONS */}
                    <label className='custom-checkbox' for='terms-conditions'>
                        <input 
                            type='checkbox'
                            name="terms-conditions"
                            id="terms-conditions"
                            required
                        /><span className='checkmark'></span>
                        I agree to the <a href="#TC"><button type='button' onClick={() => {setTCModalOpen(true);setPPModalOpen(false)}}>Terms & Conditions</button></a>
                    </label>

                    {/* PRIVACY POLICY */}
                    <label className='custom-checkbox' for="privacy-policy">
                        <input 
                            type='checkbox'
                            name="privacy-policy"
                            id="privacy-policy"
                            required
                        /><span className='checkmark'></span>
                        I agree to the <a href="#PP"><button type='button' onClick={() => {setTCModalOpen(false);setPPModalOpen(true)}}>Privacy Policy</button></a>
                    </label>

                    {/* NEWSLETTER */}
                    <label className='custom-checkbox' for="newsletter">
                        <input 
                            type='checkbox'
                            name="newsletter"
                            id="newsletter"
                        /><span className='checkmark'></span>
                        Subscribe to our Newsletter (Optional)
                    </label>
                    <Button type="submit">Create Account</Button>
                </form>
                <Link to="/Login" className='cancel-btn'><Button>Cancel</Button></Link>
            </div>
        </div>
    );
};

export default Register;