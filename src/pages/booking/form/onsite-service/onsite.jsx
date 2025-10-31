import './onsite.scss';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

//Assets
import textLogo from '/maison-d-text-logo.svg';


const OnsiteService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 

    return (
        <div className='onsite-service-wrapper'>
          <header className='onsite-service-header'>
            <img src={textLogo} aria-hidden="true" loading='lazy' style={{ width: "125px", filter:"invert(1)"}}/>
            <button onClick={() => navigate("/")}>Cancel Booking</button>
            <div className='profile-information'>
              <p>{user.firstName} {user.lastName}</p>
              <span>Basic Member</span>
            </div>
          </header>

          {/* FORM MAIN CONTENT */}
          <div className='onsite-service-content'>
            <nav className='form-navigation'>
              <ul>
                <li></li>
              </ul>
            </nav>
            <div className='form-container'> 

            </div>
            <div className='form-receipt'>

            </div>
          </div>
        </div>
    );
};

export default OnsiteService;