import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import './index.css.map';

import Blog from '../src/components/Blog';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Blog />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
