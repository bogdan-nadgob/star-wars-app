import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
