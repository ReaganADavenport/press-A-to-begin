import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to='/contact'><b>Contact</b></Link>
            &copy; 2020 - T. Scott Davenport
        </footer>
        )
};

export default Footer;