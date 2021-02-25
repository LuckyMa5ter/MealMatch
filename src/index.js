import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './frontend/test';
import Main from './frontend/mainscreen';
import * as serviceWorker from './serviceWorker';
// import { Auth0Provider } from "auth0";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
