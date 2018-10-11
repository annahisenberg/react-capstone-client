import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <section id="post">
                <h2>How to Organize Your Pantry</h2>
                <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9fc409d72ac99c1a6d2590c883ed2f62&auto=format&fit=crop&w=1500&q=80" alt="couch and cat" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat repellendus fugiat dolores consectetur eveniet earum, esse placeat culpa voluptatem asperiores porro, ipsam rem omnis nam nisi, rerum minima dolore aspernatur velit. Sapiente esse dolore explicabo? Facilis quibusdam repellat possimus modi error quidem ad rem labore aliquam, amet voluptas quisquam quo magnam distinctio suscipit nostrum enim repellendus laudantium quas molestias optio reprehenderit numquam? Voluptate vel praesentium blanditiis? Quis maiores dolorum recusandae natus expedita quae. Porro nulla sequi, saepe perspiciatis nemo necessitatibus qui pariatur exercitationem autem tenetur accusantium maiores enim repellendus, corrupti quod vitae. Dolores ratione illo porro. Voluptates, totam quidem.</p>
                <Link to="/posts/:postId"><button>Read more...</button></Link>
            </section>
            <section id="post">
                <h2>The Prettiest Tile Backsplash</h2>
                <img src="https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83a01af2dd4929477c40b27ac4d9205c&auto=format&fit=crop&w=1500&q=80" alt="kitchen" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat repellendus fugiat dolores consectetur eveniet earum, esse placeat culpa voluptatem asperiores porro, ipsam rem omnis nam nisi, rerum minima dolore aspernatur velit. Sapiente esse dolore explicabo? Facilis quibusdam repellat possimus modi error quidem ad rem labore aliquam, amet voluptas quisquam quo magnam distinctio suscipit nostrum enim repellendus laudantium quas molestias optio reprehenderit numquam? Voluptate vel praesentium blanditiis? Quis maiores dolorum recusandae natus expedita quae. Porro nulla sequi, saepe perspiciatis nemo necessitatibus qui pariatur exercitationem autem tenetur accusantium maiores enim repellendus, corrupti quod vitae. Dolores ratione illo porro. Voluptates, totam quidem.</p>
                <Link to="/posts/:postId"><button>Read more...</button></Link>
            </section>
            <section id="post">
                <h2>Best books of 2018</h2>
                <img src="https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cfc662725cdb39805f73a64695af808&auto=format&fit=crop&w=1500&q=80" alt="books" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat repellendus fugiat dolores consectetur eveniet earum, esse placeat culpa voluptatem asperiores porro, ipsam rem omnis nam nisi, rerum minima dolore aspernatur velit. Sapiente esse dolore explicabo? Facilis quibusdam repellat possimus modi error quidem ad rem labore aliquam, amet voluptas quisquam quo magnam distinctio suscipit nostrum enim repellendus laudantium quas molestias optio reprehenderit numquam? Voluptate vel praesentium blanditiis? Quis maiores dolorum recusandae natus expedita quae. Porro nulla sequi, saepe perspiciatis nemo necessitatibus qui pariatur exercitationem autem tenetur accusantium maiores enim repellendus, corrupti quod vitae. Dolores ratione illo porro. Voluptates, totam quidem.</p>
                <Link to="/posts/:postId"><button>Read more...</button></Link>
            </section>
        </div>
    )
};

export default Posts;
