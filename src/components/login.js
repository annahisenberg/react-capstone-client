import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { loadAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    onSubmit(values) {
        this.props.dispatch(login(values.username, values.password));

        if (this.props.authToken) {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    render() {
        let message;

        if (this.state.isLoggedIn === true) {
            message = <div>You are currently logged in.</div>
        }
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>LOGIN</h2>
                {error}
                {message}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <Link to="/registration-page">Sign Up</Link>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    authToken: state.auth
});

Login = connect(mapStateToProps)(Login);

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);
