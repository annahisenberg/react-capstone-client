import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css.map';
import Blog from '../src/components/Blog';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);
registerServiceWorker();
