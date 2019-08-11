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
        <div className="Relics">
        <h1>Relics From Book1:</h1>
        <RelicStyles>
            <ul>
                <h3>Level 1</h3>
                <li>
                    <Link to={`/relics/lance`}>The Lance of St. George</Link>
                </li>

                <h3>Level 2</h3>
                <li>
                    <Link to={`/relics/breastplate`}>Breastplate of St. Patrick</Link>
                </li>
            
                <h3>Level 3</h3>
                <li>
                    <Link to={`/relics/shoes`}>The Shoes of St. Spyridon</Link>
                </li>

                <h3>Level 4</h3>
                <li>
                    <Link to={`/relics/shield`}>The Shield of St. Michael</Link>
                </li>

                <h3>Level 5</h3>
                <li>
                    <Link to={`/relics/spear`}>Spear of Longinus</Link>
                </li>

                <h3>Level 6</h3>
                <li>
                    <Link to={`/relics/cloak`}>The Cloak of St. Martin</Link>
                </li>

                <h3>Level 7</h3>
                <li>
                    <Link to={`/relics/hammer`}>The Hammer of St. Marina</Link>
                </li>
            </ul>
        </RelicStyles>
        </div>
    )
}

export default RelicsList;