import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <CustomLink to="/" id="">Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
            <h1>Hello routers world .</h1>
        </div>
    );
};

export default Header;