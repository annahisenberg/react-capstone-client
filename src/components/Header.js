import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h1>Annah Isenberg</h1>
                <h2>Every Cook and Cranny</h2>
            </Link>
        </header>
    )
};

export default Header;
