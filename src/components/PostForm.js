import React from 'react';
// import { connect } from 'react-redux';
// import { fetchProtectedData } from '../actions/protected-data';
// import requiresLogin from './requires-login';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty, email } from '../validators';
import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

export class PostForm extends React.Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchProtectedData());
    // }

    onSubmit(values) {
        const token = loadAuthToken();

        fetch(`${API_BASE_URL}/posts`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);

                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // Otherwise it is a les informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const { reason, message, location } = err;
                if (reason === 'ValidationError') {
                    //convert validationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                // return Promise.reject(
                //     new SubmissionError({
                //         _error: 'Error submitting message'
                //     })
                // )
            });
    }

    render() {
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Post successfully created.
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        return (
            <form
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
                <h2>MAKE NEW BLOG POST</h2>
                {successMessage}
                {errorMessage}
                <Field
                    name="title"
                    type="text"
                    component={Input}
                    label="Title"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="body"
                    element="textarea"
                    component={Input}
                    label="Body"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="image"
                    type="text"
                    component={Input}
                    label="Image URL"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="tags"
                    type="text"
                    component={Input}
                    label="Tags"
                    validate={[required, nonEmpty]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Make Post
                </button>
            </form>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         protectedData: state.protectedData.data
//     };
// };

// export default requiresLogin()(connect(mapStateToProps)(PostForm));

export default reduxForm({
    form: 'post',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('post', Object.keys(errors)[0]))
})(PostForm);
