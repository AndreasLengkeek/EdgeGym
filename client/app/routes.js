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
import FacebookLogin from './utils/FacebookLogin';
import SignUp from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ClientList from './pages/ClientListPage';
import ClientCreate from './pages/ClientCreatePage'
import ClientDetail from './pages/ClientDetailPage';
import DeleteCoachPage from './pages/DeleteCoachPage';
import CoachList from './pages/CoachListPage';
import CoachCreate from './pages/CoachCreatePage';
import CoachDetail from './pages/CoachDetailPage';
import ProgramPage from './pages/MyProgramPage';
import ProgramCreatePage from './pages/ProgramCreatePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={All(Dashboard)} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot" component={ForgotPasswordPage} />
    <Route path="/reset/:code" component={ResetPasswordPage} />
    <Route path="/auth" component={FacebookLogin} />
    <Route path="/clients/new" component={Coach(ClientCreate)} />
    <Route path="/clients/:id" component={Coach(ClientDetail)} />
    <Route path="/clients" component={Coach(ClientList)} />
    <Route path="/coaches/delete/:id" component={Admin(DeleteCoachPage)} />
    <Route path="/coaches/new" component={Admin(CoachCreate)} />
    <Route path="/coaches/:id" component={Admin(CoachDetail)} />
    <Route path="/coaches" component={Admin(CoachList)} />
    <Route path="/programs/new/:clientid" component={Coach(ProgramCreatePage)} />
    <Route path="/programs" component={User(ProgramPage)} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
