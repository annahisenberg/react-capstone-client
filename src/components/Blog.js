import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import Sidebar from './Sidebar';
import AboutMePage from './About-me-page';
import PostForm from './PostForm';
import RegistrationPage from './registration-page';
import Login from './login';
import Post from './Post';
import contactForm from './contact-form';
import { refreshAuthToken } from '../actions/auth';


import {
    Route,
    Link,
    Switch,
    withRouter
} from 'react-router-dom';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebook, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(faFacebook, faCoffee);


export class Blog extends Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            //Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 //one hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <Navbar />
                <Header />
                <div className="flex-container">
                    <div className="flex-container__main" >
                        <Switch>
                            <Route exact path="/about-me-page" component={AboutMePage} />
                            <Route exact path="/post-form" component={PostForm} />
                            <Route exact path="/registration-page" component={RegistrationPage} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/posts" component={Posts} />
                            <Route exact path="/" component={Posts} />
                            <Route exact path="/contact" component={contactForm} />
                            <Route exact path="/posts/:postId" component={Post} />
                        </Switch>
                    </div>
                    <div className="flex-container__sidebar">
                        <Sidebar />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Blog));
