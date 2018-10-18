import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

export class TaggedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        }
    }
    componentDidMount() {
        const tag = this.props.location.pathname.split('/');
        const selection = tag[tag.length - 1].replace(' ', '');


        fetch(`${API_BASE_URL}/tags/${selection}`)
            .then(res => res.json())
            .then(data => {
                console.warn('data', data);
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
                <section id={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt="blog-post-pic" />
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.slug}`}><button>Read more...</button></Link>
                </section>
            ))
        )
    }
};

export default TaggedPosts;
