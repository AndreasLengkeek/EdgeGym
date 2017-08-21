import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App';
import NotFound from './components/NotFound';

import Home from './components/Home';
import HelloWorld from './components/HelloWorld';

ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/helloworld" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
