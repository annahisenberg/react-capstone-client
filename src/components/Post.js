import React from 'react';
import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';


export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            error: null
        }
    }
    componentDidMount() {
        const slug = this.props.location.pathname.split('/')[2];

        return fetch(`${API_BASE_URL}/posts/${slug}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    post: data
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
        const { post, error } = this.state;

        if (error) {
            return <div>{error.message}</div>;
        }

        return (
            <section id="post">
                <h2>{post.title}</h2>
                <img src={post.image} />
                <p>{post.body}</p>

                <h2>COMMENTS:</h2>
                <div id="disqus_thread"></div>
            </section>

        )
    }
};

export default Post;