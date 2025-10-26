import './register.scss';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Components 
import Button from '../../components/button/buttonOne';

//Assets
import MDLogo from '/maison-d-main-logo.svg';
import { form } from 'motion/react-client';

const Register = () => {
    const [isTCModalOpen, setTCModalOpen] = useState(false);
    const [isPPModalOpen, setPPModalOpen] = useState(false);
    const navigate = useNavigate();

    // Form data states
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Password match check
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    birthday: formData.birthday,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message || 'Registration successful!');
                setTimeout(() => navigate('/login'), 1500); // Redirect to login
            } else {
                setError(data.message || 'Registration failed.');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        }
    };

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
                <form className='register-form' onSubmit={handleSubmit}>
                    <div className='register-name'>
                        {/* FIRST NAME*/}
                        <div className='first-name'>
                            <label for="firstName">First Name</label>
                            <input 
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
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
                                value={formData.lastName}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    {/* PHONE */}
                    <label for="phoneNumber">Phone Number</label>
                    <input 
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder='(+63)'
                        required
                    />
                    {/* PASSWORD */}
                    <label for="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Create a password'
                        required
                    />
                    {/* CONFIRM PASSWORD */}
                    <label for="confirmPassword">Confirm Password</label>
                    <input 
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
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

                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}

                </form>
                <Link to="/Login" className='cancel-btn'><Button>Cancel</Button></Link>
            </div>
        </div>
    );
};

export default Register;