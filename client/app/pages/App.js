/**
 * Basic wrapper class for app content components
 */
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';
import auth from '../utils/Auth';

const App = ({ children }) => (
  <div id="wrapper">
      {auth.isUserAuthenticated() ? (
        <Header />
      ) : ("")}
    <div className="page-content-wrapper">
      <Grid fluid >
        {children}
      </Grid>
    </div>
  </div>
);

export default App;
