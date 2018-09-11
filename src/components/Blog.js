import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import Sidebar from './Sidebar';
import AboutMePage from './About-me-page';
import PostForm from './PostForm';
import Signup from './sign-up';
import Login from './login';
import Post from './Post';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

export default class Blog extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar />
                    <Header />
                    <div className="flex-container">
                        <div className="flex-container__main" >
                            <Switch>
                                <Route exact path="/about-me-page" component={AboutMePage} />
                                <Route exact path="/post-form" component={PostForm} />
                                <Route exact path="/sign-up" component={Signup} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/" component={Posts} />
                                <Route exact path="/:postId" component={Post} />
                            </Switch>
                        </div>
                        <div className="flex-container__sidebar">
                            <Sidebar />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}
