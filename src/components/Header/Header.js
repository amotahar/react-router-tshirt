import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <nav className='header'>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='orders'>Orders</Link>
            <Link to='contacts'>Contacts</Link>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='orders'>Orders</Link>
            <Link to='contacts'>Contacts</Link>
            </nav>
    );
};

export default Header;