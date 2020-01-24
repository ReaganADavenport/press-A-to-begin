import React, { Fragment, Component } from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Banner from '../images/pressAbanner.png';
import Banner_L from '../images/pressAbanner-3.png';


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
            <div>
                <Media query= "(min-width: 700px)" render={() =>
                (
                    <img src={Banner_L} className="LargeBanner"/>
                )}
                />

                <Media query= "(max-width: 699px" render={() =>
                (
                    <img src={Banner} className="Banner"/>
                )}
                />
            </div>
            <>
                <div className="navBar">
                    <div className="container1">
                        <Fragment>
                            
                        </Fragment>
                        <p>Ministry That Speaks The Language Of This Generation</p>
                    </div>
                    <LinkStyles>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/contact'><b>Contact</b></Link>
                        <Link to='/relics'><b>Relics</b></Link>
                        <Link to='/shop'><b>Shop</b></Link>
                    </LinkStyles>
                </div>
            </>
            </>
        );
    }
        
    };

export default Header;