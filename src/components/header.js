import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyles = styled.ul`
    align-content: space-between;
    font-family: 'Amiri', serif;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    
    a{
        align-content: space-between;
        display: flex;
        margin: 5px;
        padding: 5px;
    }
`


const Header = () => {
    return(
        <div className="navBar">
        <LinkStyles>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/relics'>Relics</Link>
        </LinkStyles>
        </div>
    ) ;
};

export default Header;