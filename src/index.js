import React from 'react';
import ReactDOM from 'react-dom';
import './node_modules/index.css';
import App from './node_modules/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "babel-polyfill";
import "isomorphic-fetch";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

