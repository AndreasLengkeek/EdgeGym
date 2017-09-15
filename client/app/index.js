/**
 * Entry point of the client, routes and app structure start here
 */
// DEPENDENCIES //
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

// COMPONENTS //
import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/App/Home';
import LoginForm from './components/Login/LoginForm';
import MyClients from './components/ClientManager/ClientManager';

/*
  This sets up the app router and app structure
 */
ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/clients" component={MyClients} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
