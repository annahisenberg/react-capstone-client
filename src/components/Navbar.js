import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Lifestyle</li>
                <li><Link to="/about-me-page">About Me</Link></li>
                <li><Link to="/sign-up">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><Link to="/post-form">Make new post</Link></li>
                <li><Link to="/">All Posts</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;
