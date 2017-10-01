import React from 'react';
import {
  Route,
  Switch
} from 'react-router';

import PrivateRoute from './components/PrivateRoute';

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Clients from './pages/ClientPage';
import ProgramPage from './pages/ProgramPage';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/clients" component={Clients} />
    <PrivateRoute path="/programs" component={ProgramPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
