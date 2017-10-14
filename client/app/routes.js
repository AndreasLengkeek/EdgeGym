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
import AdminList from './pages/AdminListPage';
import ClientList from './pages/ClientListPage';
import ClientCreate from './pages/ClientCreatePage'
import ClientDetail from './pages/ClientDetailPage';
import ProgramPage from './pages/ProgramPage';
import ProgramCreatePage from './pages/ProgramCreatePage';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/admins" component={AdminList} />
    <PrivateRoute path="/clients/new" component={ClientCreate} />
    <PrivateRoute path="/clients/:id" component={ClientDetail} />
    <PrivateRoute path="/clients" component={ClientList} />
    <PrivateRoute path="/programs/new/:clientid" component={ProgramCreatePage} />
    <PrivateRoute path="/programs" component={ProgramPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
