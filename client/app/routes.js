import React from 'react';
import {
  Route,
  Switch
} from 'react-router';

import Authorization from './components/Authorization';

const User = Authorization(['user']);
const All = Authorization(['user', 'coach', 'admin']);
const Coach = Authorization(['coach', 'admin']);
const Admin = Authorization(['admin']);

import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassPage from './pages/ResetPassPage'
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
    <Route exact path="/" component={All(Dashboard)} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot" component={ResetPassPage} />
    <Route path="/clients/new" component={Coach(ClientCreate)} />
    <Route path="/clients/:id" component={Coach(ClientDetail)} />
    <Route path="/clients" component={Coach(ClientList)} />
    <Route path="/coaches/new" component={Admin(CoachCreate)} />
    <Route path="/coaches/:id" component={Admin(CoachDetail)} />
    <Route path="/coaches" component={Admin(CoachList)} />
    <Route path="/programs/new/:clientid" component={Coach(ProgramCreatePage)} />
    <Route path="/programs" component={Coach(ProgramPage)} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
