import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Every Cook and Cranny</h1>
            </Link>
        </header>
    )
};

export default Header;
