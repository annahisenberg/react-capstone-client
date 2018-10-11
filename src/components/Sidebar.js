import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
        <div>
            <img id="sidebar-img" src="https://images.unsplash.com/photo-1518821703881-9da5a9f42038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdba57a13d407e29cfc0352b90e32be5&auto=format&fit=crop&w=1650&q=80" alt="pink fence" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus sunt laudantium autem odit animi beatae saepe accusamus! Ducimus, possimus?</p>
            <h3><Link to="/about-me-page">Read my story!</Link></h3>
            <hr />
            <section id="social-media">
                <h3>Let's Connect!</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><FontAwesomeIcon icon="coffee" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon icon="instagram" /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/"><FontAwesomeIcon icon="coffee" /></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/"><FontAwesomeIcon icon="coffee" /></a>
                    </li>
                </ul>
            </section>
        </div>
    )
};

export default Sidebar;
