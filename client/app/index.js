/**
 * Entry point of the client, routes and app structure start here
 */
// DEPENDENCIES //
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import auth from './modules/Auth';

// COMPONENTS //
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/App/Home';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUpPage';
import MyClients from './components/ClientManager/ClientManager';

import ProgramPage from './components/Program/ProgramPage';
// import MyClients from './components/ClientManager/ClientManager';

import PrivateRoute from './components/PrivateRoute';

function requireAuth(nextState, replace) {
  console.log('check auth');
  if (!auth.isUserAuthenticated()) {
    replace({
      pathName: '/login'
    })
  }
}

/*
  This sets up the app router and app structure
 */
render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/clients" component={MyClients} />
        <PrivateRoute path="/programs" component={ProgramPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
