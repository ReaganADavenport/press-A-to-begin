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
        text-align: center;
        color: white;
    }`

const RelicsList = () => {
    return(
        <div className="Relic">
        <h1>Relics From Book1:</h1>
        <RelicStyles>
            <li>
                <Link to={`/relics/spear`}>Spear of Longinus</Link>
            </li>
            <li>
                <Link to={`/relics/breastplate`}>Breastplate of St. Patrick</Link>
            </li>
            <li>
                <Link to={`/relics/lantern`}>The Lantern of St. Florian</Link>
            </li>
            <li>
                <Link to={`/relics/cloak`}>The Cloak of St. Martin</Link>
            </li>
            <li>
                <Link to={`/relics/lantern`}>The Lantern of St. Florian</Link>
            </li>
        </RelicStyles>
        </div>
    )
}

export default RelicsList;