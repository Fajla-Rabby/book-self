import React from 'react';
import "./Review.css";

const Review = ({review}) => {
    const { name, reviewee, rating} = review;
    return (
        <div className='review'>
            <h4>{name}</h4>
            <h4>{reviewee}</h4>
            <p>{rating}</p>
            
        </div>

    );
};

export default Review;