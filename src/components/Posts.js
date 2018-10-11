import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        }
    }
    componentDidMount() {
        fetch(`${API_BASE_URL}/posts`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    posts: data
                });
            },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        return (
            posts.map(post => (
                <section id="post">
                    <h2>{post.title}</h2>
                    <img src={post.image} />
                    <p>{post.body}</p>
                    <Link to="/posts/:postId"><button>Read more...</button></Link>
                </section>
            ))
        )
    }
};

export default Posts;
