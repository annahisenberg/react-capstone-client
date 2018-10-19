import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import TextTruncate from 'react-text-truncate';

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        }
        this.initialCount = 3;
        this.counter = this.initialCount;

        this.loadMorePosts = this.loadMorePosts.bind(this);
    }

    fetchPosts(increaseLimit) {
        fetch(`${API_BASE_URL}/posts/${increaseLimit}`)
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

    componentDidMount() {
        this.fetchPosts(this.initialCount)
    }


    loadMorePosts() {
        this.counter += 3;
        this.fetchPosts(this.counter);
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        return (
            <div>
                {
                    posts.map((post, i) => (
                        <section id="posts-section" key={i}>
                            <h2 id="posts-h2">{post.title}</h2>
                            <img className="blog-post-pic" src={post.image} alt="blog-post-pic" />
                            <TextTruncate
                                line={7}
                                truncateText="…"
                                text={post.body}
                            />
                            <Link to={`/posts/post/${post.slug}`}><button>Read more...</button></Link>
                        </section>
                    ))
                }
                <button onClick={this.loadMorePosts}>See more →</button>
            </div>
        )
    }
};

export default Posts;
