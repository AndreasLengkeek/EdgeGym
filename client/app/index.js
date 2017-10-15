import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './styles/style.scss';

import auth from './utils/Auth';
import App from './pages/App';
import Routes from './routes';

auth.setAuthDefaults();

render((
  <Router>
    <App>
      <Routes />
    </App>
  </Router>
), document.getElementById('app'));
