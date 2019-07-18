import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import '../../images/bookCover.png';

import './home.css';

const Home = () => {
    return(
        <div className="Home">
        <h1>Welcome!</h1>
        <img src="../../images/bookCover.png"/>
        </div>
    )
}

export default Home;