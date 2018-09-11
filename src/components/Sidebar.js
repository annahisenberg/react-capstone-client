import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1518821703881-9da5a9f42038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdba57a13d407e29cfc0352b90e32be5&auto=format&fit=crop&w=1650&q=80" height="100" width="100" alt="pink fence" />
            <h3><Link to="/about-me-page">Read my story!</Link></h3>
        </div>
    )
};

export default Sidebar;
