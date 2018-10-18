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
    }
    componentDidMount() {
        fetch(`${API_BASE_URL}/posts`)
            .then(res => res.json())
            .then(data => {
                data = data.reverse();

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
                            <Link to={`/posts/${post.slug}`}><button>Read more...</button></Link>
                        </section>
                    ))
                }
                <p><a href="#">See more →</a></p>
            </div>
        )
    }
};

export default Posts;
