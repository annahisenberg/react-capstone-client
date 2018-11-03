import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as YourSvg } from '../assets/logo/LivingWithAnnah.svg';
const Header = () => {
    return (
        <header>

            <Link to="/">
                <YourSvg className="logo" />

            </Link>
            <hr />
        </header>
    )
};

export default Header;
