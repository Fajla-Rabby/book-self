import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import "./Review.css";

const Review = ({review}) => {
    const { name, reviewee, rating} = review;
    return (
        <div className='review'>
            <h4>{name}</h4>
            <h4>{reviewee}</h4>
            <Rating
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                readonly
            ></Rating>
            
        </div>

    );
};

export default Review;