import './onsite.scss';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Components 
import StepDateTime from './StepDateTime';
import StepControls from './StepControls';
import StepNavigation from './StepNavigation';
import BookingReceipt from './BookingReceipt';
import { useBookingState } from '../../../../context/BookingContext';

// Assets
import textLogo from '/maison-d-text-logo.svg';

const OnsiteService = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); 
  const { bookingData } = useBookingState();
  const [step, setStep] = useState(1);

  // Define steps (only one for now)
  const steps = [{ id: 1, label: 'Date & Time' }];

  // Step navigation logic
  const handleNext = () => {
    if (step < steps.length) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Step content rendering
  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepDateTime />;
      default:
        return <StepDateTime />;
    }
  };

  return (
    <div className='onsite-service-wrapper'>
      <header className='onsite-service-header'>
        <img
          src={textLogo}
          aria-hidden="true"
          loading='lazy'
          style={{ width: "125px", filter:"invert(1)" }}
        />
        <button onClick={() => navigate("/")}>Cancel Booking</button>
        <div className='profile-information'>
          <p>{user.firstName} {user.lastName}</p>
          <span>Basic Member</span>
        </div>
      </header>

      {/* FORM MAIN CONTENT */}
      <div className='onsite-service-content'>

        {/* LEFT SIDE NAV (Display-only step indicator) */}
        <nav className='form-navigation'>
          <StepNavigation
            currentStep={step}
            totalSteps={steps.length}
          />
        </nav>

        {/* CENTER: MAIN CONTENT */}
        <div className='form-container'> 
          {renderStep()}

          {/* BOTTOM CONTROLS (Next / Back) */}
          <StepControls
            onNext={handleNext}
            onBack={handleBack}
            isLastStep={step === steps.length}
          />
        </div>

        {/* RIGHT SIDE RECEIPT */}
        <div className='form-receipt'>
          <BookingReceipt bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
};

export default OnsiteService;
