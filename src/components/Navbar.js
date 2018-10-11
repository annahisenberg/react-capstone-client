import React from 'react';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatchEvent(clearAuth());
        clearAuthToken();
    }

    showControls() {
        console.log(this.props.loggedIn);

        if (this.props.loggedIn) {
            return (
                <li><Link onClick={() => this.logOut()}>Log out</Link></li>
            )
        }
        else {
            return (
                <React.Fragment>
                    <li><Link to="/registration-page">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </React.Fragment>
            )
        }
    }

    render() {

        return (
            <nav>
                <ul>
                    <li><Link to="/about-me-page">About Me</Link></li>
                    {this.showControls()}
                    <li><Link to="/post-form">Make new post</Link></li>
                    <li><Link to="/posts">All Posts</Link></li>
                    <li><Link to="/contact">Contact me</Link></li>
                </ul>
            </nav>
        )
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default Navbar;
