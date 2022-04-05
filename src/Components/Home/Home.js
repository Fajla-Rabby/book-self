import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useReview';
import Review from '../Review/Review';
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReview();
    return (

        <div>

            <div className='main-container'>
                <section className='heading'>
                    <h2>Book Self</h2>
                    <h5>Your Next Book</h5>
                    <h5>Your Best Book</h5>
                    <p>With over 25 million books. Browse through variety of genres such as Fiction, Self help, Children's books, School textbooks, Higher education textbooks, and much more.
                        Explore Editor's corner, Exam Central, Indian Language Books, New Releases & Best sellers .</p>
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

                    ></Review>)
                }

            </div>
            {/* <button className='btn'>Show More</button>  */}
            <div className='show-more'>
                <Link to="/review">Show More</Link>
            </div>
        </div>
    );
};

export default Home;