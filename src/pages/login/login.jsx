import './login.scss';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

//Components 
import Button from '../../components/button/buttonOne';

//Assets
import MDLogo from '/maison-d-main-logo.svg';
import Facebook from '../../assets/icons/facebook-logo.svg';
import Google from '../../assets/icons/google-logo.svg';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
    const [isTCModalOpen, setTCModalOpen] = useState(false);
    const [isPPModalOpen, setPPModalOpen] = useState(false);

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Login Failed'); 
            }

            // Call AuthContext login to update state immediately
            login(data.user, data.token);

            // Save JWT Token and User Data (You can remove this later because it's optional)
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            setTimeout(() => navigate('/'), 1500); // Redirect to dashboard

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-wrapper'>
            <div className='login-background'>
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
            <div className='login-container'>
                <h1>Login</h1>
                <form className='login-form' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder='Enter your email' 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password" 
                        name="password" 
                        placeholder='Enter password' 
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit">{loading ? 'Logging in...' : 'Login'}</Button>
                    <Link to="/"><Button type="button">Go Back</Button></Link>
                </form>
                {error && <p className='error-message'>{error}</p>}
                <p style={{textAlign:"center"}}>Don't have an account? <Link to="/Register">Register Here</Link></p>
                <div className='login-divider'>
                    <div/>
                    <p>Or Sign-In With</p>
                    <div/>
                </div>
                <div className='login-options'>
                    <button type="button">
                        <img src={Facebook} alt="Login using Facebook" loading='lazy'/>
                    </button>
                    <button type="button">
                        <img src={Google} alt="Login using Google" loading='lazy'/>
                    </button>
                </div>
                <div className='login-policy'>
                    <p>By signing up, you agree to our</p>
                    <a href="#TC">
                        <motion.button 
                            onClick={() => {
                                setTCModalOpen(true);
                                setPPModalOpen(false);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Terms & Conditions
                        </motion.button>
                    </a>
                    <a href="#PP">
                        <motion.button
                            onClick={() => {
                                setPPModalOpen(true);
                                setTCModalOpen(false);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Privacy Policy
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;