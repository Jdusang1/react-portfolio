import React from 'react';// imports react library 
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'; //imports the app variable from the ./App file
import * as serviceWorker from './serviceWorker';//imports the service worker

//every React component Must return either a block of HTML (JSX) OR null
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
