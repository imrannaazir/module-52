import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='./posts'>Posts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
            <h1>this is header.</h1>
        </div>
    );
};

export default Header;