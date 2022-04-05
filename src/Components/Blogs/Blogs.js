import React from 'react';
import "./Blogs.css";


const Blogs = () => {
    return (
        <div className='blog'>
            <h3>What is contex API?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p> <br />
            <h3>What is Semantic Tag?</h3>
            <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.</p>
        </div>
    );
};

export default Blogs;