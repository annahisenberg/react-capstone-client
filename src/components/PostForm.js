import React from 'react';
import { connect } from 'react-redux';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';

export class PostForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <form action="">
                <input type="text" placeholder="Enter title of post" />
                <textarea name="post-body" id="post-body" cols="30" rows="10" placeholder="Enter post body"></textarea>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(PostForm));
