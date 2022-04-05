import React from 'react';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
           <div className='main-container'>
                <section className='heading'>
                    <h1>Your Next Book</h1> 
                    <h1>Your Best Book</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus necessitatibus corporis, aliquid totam consequatur velit magnam at ad libero nemo possimus, autem atque iste est.</p>
                    <button className='btn'>Live Demo</button>
                </section>
                <section className='image'>
                        <img src="../../../images/books.jpg" alt="" />
                </section>
           </div>
           <div className='review-container'>
                {
                    reviews.slice(0, 3).map(review => <Review
                    key={review.id}
                    review={review}
                    button
                    ></Review>)
                }
                 
           </div>
           <button>Show More</button> 
        </div>
    );
};

export default Home;