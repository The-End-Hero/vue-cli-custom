import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { HashRouter } from 'react-router-dom'

// import Routes from './routes/Routers';
// import Env from 'rs-browser';

ReactDOM.render(
  <HashRouter >
    <App/>
  </HashRouter>
  , document.getElementById('application'));

