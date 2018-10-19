import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div id="home">
            <h2>A lifestyle blog</h2>
            <div id="home-flex_container">
                <section className="flex-box one">
                    <p>Home Improvement</p>
                </section>
                <section className="flex-box two">
                    <p>Recipes</p>
                </section>
                <section className="flex-box three">
                    <p>Decorating</p>
                </section>
            </div>
            <Link to="/posts"><button>Go to blog →</button></Link>
        </div>
    )
};

export default Homepage;