import './review.scss';
import { useState, useEffect } from 'react';

//Assets
import CustomerIcon1 from '../../../assets/images/customer-one.png';
import CustomerIcon2 from '../../../assets/images/customer-two.png';
import CustomerIcon3 from '../../../assets/images/customer-three.png';
import Star from '../../../assets/icons/Star.png';

const Review = () => {
    return (
        <>
            {/* Header */}
            <div className="spa-header">
                <h1 className="spa-title">What Our Client's Say</h1>
                <div className="spa-title-divider"></div>
                <p className="spa-subtitle">
                    Wonderful feedback from our loyal and generous customers!
                </p>
            </div>
        </>
    );
};

export default Review;