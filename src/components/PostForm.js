import React from 'react';

const PostForm = () => {
    return (
        <form action="">
            <input type="text" placeholder="Enter title of post" />
            <textarea name="post-body" id="post-body" cols="30" rows="10" placeholder="Enter post body"></textarea>
            <button>Submit</button>
        </form>
    )
};

export default PostForm;