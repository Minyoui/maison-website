import './review.scss';
import { useState } from 'react';

//Components
import Header from '../../../components/header/header';

//Assets
import CustomerIcon1 from '../../../assets/images/customer-one.png';
import CustomerIcon2 from '../../../assets/images/customer-two.png';
import CustomerIcon3 from '../../../assets/images/customer-three.png';
import Star from '../../../assets/icons/Star.png';

const Review = () => {
    const [activeReviewId, setActiveReviewId] = useState('review1');
    const reviewsData = [
            {
                id: 'review1',
                profileIcon: CustomerIcon1,
                profileName: 'Georgia Familar',
                comment: "They provide a relaxing experience. This branch makes sure you are pampered and comfortable. The place is also clean. I had an amazing massage by Ma'am Maris! She really did a great job! I am pleased with my every visit. Thank you so much Blissful Kawit Branch.",
            },
            {
                id: 'review2',
                profileIcon: CustomerIcon2,
                profileName: 'Joymica Ferrer',
                comment: "My go-to massage place! Welcoming and accommodating ang staff at palaging beri good ang experience :D thankful also that they are open until 12AM! Still able to accommodate me despite minor changes sa sched. Thank you always, Blissful Bali Massage Spa!",
            },
            {
                id: 'review3',
                profileIcon: CustomerIcon3,
                profileName: 'Raymond De Vera Lachica',
                comment: "A Highly Recommended Massage Experience: Blissful Bali Massage Spa - Kawit Branch If you’re looking for the ultimate relaxation and rejuvenation, I highly recommend a visit to Blissful Bali Massage Spa, where every detail is designed to melt away stress and tension.",
            },
        ];
    
    
    

    // Find the currently active service object from the data array
    const activeReview = reviewsData.find(review => review.id === activeReviewId);

    return (
        <div className="reviews-section" id="reviews">
            {/* Header */}
            <Header 
                title="What Our Client's Say"
                subtitle="Wonderful feedbacks from our loyal customers"
            />
            <div className="reviews-container">
                                <div className="reviews-box">
                                    <div className="reviews-details">
                                        {activeReview && (
                                            <div className="reviews-content active">
                                                <img src={activeReview.profileIcon} className="reviews-profile-icon"  aria-hidden="true" loading='lazy'></img>
                                                <h3 className="reviews-profile-name">{activeReview.profileName}</h3>
                                                <div className="reviews-rating">
                                                    <img src={Star} aria-hidden="true" loading='lazy'/>
                                                    <img src={Star} aria-hidden="true" loading='lazy'/>
                                                    <img src={Star} aria-hidden="true" loading='lazy'/>
                                                    <img src={Star} aria-hidden="true" loading='lazy'/>
                                                    <img src={Star} aria-hidden="true" loading='lazy'/>
                                                </div>
                                                <p className="reviews-comment">{activeReview.comment}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-low-bar">
                                            <ul className="review-nav">
                                                {reviewsData.map((review) => (
                                                    <li
                                                        key={review.id} // Important for React list rendering
                                                        className={`review-nav-item ${activeReviewId === review.id ? 'active' : ''}`}
                                                        onClick={() => setActiveReviewId(review.id)} // Update state on click
                                                        >
                                                    </li>
                                                ))}
                                            </ul>
                                    </div>
                                </div>
                            </div>
            
        </div>
    );
};

export default Review;