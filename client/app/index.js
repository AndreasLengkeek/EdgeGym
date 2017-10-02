import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './styles/style.scss';

import App from './pages/App';
import Routes from './routes';

render((
  <Router>
    <App>
      <Routes />
    </App>
  </Router>
), document.getElementById('app'));
