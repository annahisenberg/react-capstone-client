import React from 'react';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatchEvent(clearAuth());
        clearAuthToken();
    }

    render() {
        //Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <nav>
                <ul>
                    <li>Lifestyle</li>
                    <li><Link to="/about-me-page">About Me</Link></li>
                    <li><Link to="/registration-page">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><Link to="/post-form">Make new post</Link></li>
                    <li><Link to="/">All Posts</Link></li>
                    {logOutButton}
                </ul>
            </nav>
        )
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default Navbar;
