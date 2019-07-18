import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './relics.css';

const RelicStyles = styled.ul`
    align-content: space-between;
    display: flex;
    flex-wrap: wrap;
    font-size: 25px;
    justifyContent: center;
    list-style-type: none;
    margin: 30px;
    padding: 0;

    li a {
        display: flex;
        align-content: center;
        justify-content: center;
        color: white;
    }
`

const Relics = () => {
    return(
        <div className="Relic">
        <h1>Relics From Book1:</h1>
        <RelicStyles>
            <li>
                <Link to={`/`}>Spear of Longinus</Link>
            </li>
            <li>
                <Link to={`/`}>Breastplate of St. Patrick</Link>
            </li>
            <li>
                <Link to={`/`}>I Can't remember the rest</Link>
            </li>
        </RelicStyles>
        </div>
    )
}

export default Relics;