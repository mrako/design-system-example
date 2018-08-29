import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import './assets/stylesheets/main.less';

const app = document.getElementById('app');

const router = (
  <App />
);

ReactDOM.render(router, app);
