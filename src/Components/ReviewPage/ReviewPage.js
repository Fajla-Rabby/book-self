import React from 'react';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';
import "./ReviewPage.css";

const ReviewPage = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div className='reviews-item'>
            {
                reviews.map(review => <Review
                     key={review.id}
                     review={review}
                     ></Review>)
            }
        </div>
    );
};

export default ReviewPage;