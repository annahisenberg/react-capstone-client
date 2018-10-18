import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { loadAuthToken } from '../local-storage';
import { API_BASE_URL } from '../config';

export class EditPostForm extends React.Component {
    componentDidMount() {
        this.props.initialize({
            title: this.props.post.title,
            image: this.props.post.image,
            body: this.props.post.body,
            tags: this.props.post.tags
        });
    }

    onSubmit(values) {
        const token = loadAuthToken();

        return fetch(`${API_BASE_URL}/posts/${this.props.post.slug}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(values)
        })
            .then(() => console.log('Submitted with values', values))
            .catch(error => console.log(error));
    }

    reset() {
        this.props.dispatch(reset('EditPostForm'));
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div>
                    <label>Title</label>
                    <div>
                        <Field
                            name="title"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Body</label>
                    <div>
                        <Field
                            name="body"
                            component="textarea"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Image</label>
                    <div>
                        <Field
                            name="image"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <label>Tags</label>
                    <div>
                        <Field
                            name="tags"
                            component="input"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => this.reset()}>
                        Undo Changes
                    </button>
                </div>
            </form>
        )
    }
}


export default reduxForm({
    form: 'EditPostForm', // a unique identifier for this form
})(EditPostForm);

