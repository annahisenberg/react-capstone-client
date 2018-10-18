import React from 'react';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';

export class Navbar extends React.Component {
    logOut() {
        clearAuthToken();
        this.props.dispatch(clearAuth());
    }

    showControls() {

    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/about-me-page">About Me</Link></li>
                    {
                        this.props.loggedIn ?
                            (<li><a onClick={() => this.logOut()}>Log out</a></li>)
                            :
                            (<React.Fragment>
                                <li><Link to="/registration-page">Sign up</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </React.Fragment>)
                    }
                    <li><Link to="/posts">All Posts</Link></li>
                    {this.props.loggedIn ? <li><Link to="/post-form">Make new post</Link></li> : null}
                    <li><Link to="/contact">Contact me</Link></li>
                </ul>
            </nav>
        )
    }
};

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);

