import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div id="sidebar">
            <h2>About Me</h2>
            <img id="sidebar-img" src="https://images.unsplash.com/photo-1518821703881-9da5a9f42038?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdba57a13d407e29cfc0352b90e32be5&auto=format&fit=crop&w=1650&q=80" alt="pink fence" />
            <p>Welcome to Every Cook and Cranny! I'm Annah, and I'm so thrilled you stopped by! I enjoy cooking, decorating, and adding pages to this place whenever inspiration strikes. Since this is a complex application, I decided to create it using React so that it would be super fast, responsive, have a consistent look, and be easy to maintain.</p>
            <h3><Link to="/about-me-page">Read my story →</Link></h3>
            <hr />
            <section id="social-media">
                <h3>Let's Connect!</h3>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/">
                            <i className="icon-facebook2" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <i className="icon-instagram" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">
                            <i className="icon-youtube" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">
                            <i className="icon-twitter" ></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/">
                            <i className="icon-pinterest2" ></i>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
};

export default Sidebar;
