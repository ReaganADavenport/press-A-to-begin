import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '../images/Press_A_Banner.png';

const LinkStyles = styled.ul`
    align-content: space-between;
    font-family: 'Amiri', serif;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    
    a{
        align-content: space-between;
        display: flex;
        margin: 0;
        padding: 5px;
    }
`


const Header = () => {
    return(
        <div className="navBar">
        <img src={Banner} alt="Banner"/>
        <LinkStyles>
            <Link to='/'><b>Home</b></Link>
            <Link to='/contact'><b>Contact</b></Link>
            <Link to='/relics'><b>Relics</b></Link>
        </LinkStyles>
        </div>
    ) ;
};

export default Header;