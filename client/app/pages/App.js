/**
 * Basic wrapper class for app content components
 */
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';

import Header from '../components/Header';

const App = ({ children }) => (
  <Grid fluid>
    <Header />
    <div>
      {children}
    </div>
  </Grid>
);

export default App;
