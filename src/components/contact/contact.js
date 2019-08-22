import React from 'react';

import Scott from '../../images/Scott_Davenport.JPG';

import './contact.css';

const Home = () => {
    return(
        <div className="Contact">
        <h1>Contact Information:</h1>
        <img src={Scott} alt="Scott"/>
        
        <p>Email: scott@pressatobegin.com</p>
        <p>FaceBook: <a href="https://www.facebook.com/pressatobegin/">facebook.com/Press-A-To-Begin</a></p>
        <p>Instagram: <a href="https://www.instagram.com/Pressatobegin_/">instagram.com/Pressatobegin_</a></p>
        </div>
    )
}

export default Home;