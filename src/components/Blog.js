import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import Aboutme from './Aboutme';
import AboutMePage from './About-me-page';
import MakePost from './Make-Post';
import Signup from './sign-up';
import Login from './login';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

export default class Blog extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <Header />
                    <Aboutme />
                    <Route exact path="/about-me-page" component={AboutMePage} />
                    <Route exact path="/make-post" component={MakePost} />
                    <Route exact path="/sign-up" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Posts} />
                    <Footer />
                </div>
            </Router>
        )
    }
}
