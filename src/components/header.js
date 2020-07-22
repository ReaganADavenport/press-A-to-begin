import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../images/PressAremote-2.png"


const LinkStyles = styled.ul`
    align-items: space-around;
    font-family: 'Amiri', serif;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
    padding-inline-start: 0px;
    
    a{
        align-items: space-around;
        display: flex;
        justify-content: center;
        margin: 0 0;
        padding: 10px 10px 10px 10px;
    }
`


class Header extends Component {
    render(){
        return(
            <>
                <div className="navBar">
                    <div className="container1">
                    </div>
                    <LinkStyles>
                        <img src={logo}></img>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/contact'><b>Contact</b></Link>
                        <Link to='/relics'><b>Relics</b></Link>
                        <Link to='/shop'><b>Shop</b></Link>
                    </LinkStyles>
                </div>
            </>

        );
    }
        
    };

export default Header;