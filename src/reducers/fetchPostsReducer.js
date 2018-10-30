import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
} from '../actions/fetchPosts';

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export default function postsReducer(state = initialState, action) {
    if (action.type === FETCH_POSTS_REQUEST) {
        return { ...state, loading: true }
    } else if (action.type === FETCH_POSTS_SUCCESS) {
        return { ...state, loading: false, posts: action.posts }
    } else if (action.type === FETCH_POSTS_ERROR) {
        return { ...state, loading: false, error: action.error }
    }
    return state;
}
