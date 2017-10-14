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
import ClientList from './pages/ClientListPage';
import ClientCreate from './pages/ClientCreatePage'
import ClientDetail from './pages/ClientDetailPage';
import CoachList from './pages/CoachListPage';
import CoachCreate from './pages/CoachCreatePage';
import CoachDetail from './pages/CoachDetailPage';
import ProgramPage from './pages/ProgramPage';
import ProgramCreatePage from './pages/ProgramCreatePage';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <PrivateRoute path="/clients/new" component={ClientCreate} />
    <PrivateRoute path="/clients/:id" component={ClientDetail} />
    <PrivateRoute path="/clients" component={ClientList} />
    <PrivateRoute path="/coaches/new" component={CoachCreate} />
    <PrivateRoute path="/coaches/:id" component={CoachDetail} />
    <PrivateRoute path="/coaches" component={CoachList} />
    <PrivateRoute path="/programs/new/:clientid" component={ProgramCreatePage} />
    <PrivateRoute path="/programs" component={ProgramPage} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
