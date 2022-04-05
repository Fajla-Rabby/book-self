import React from 'react';

const Review = ({review}) => {
    const { name, reviewee, rating} = review;
    return (
        <div>
            <h4>{name}</h4>
            <h4>{reviewee}</h4>
            <p>{rating}</p>
            
        </div>

    );
};

export default Review;