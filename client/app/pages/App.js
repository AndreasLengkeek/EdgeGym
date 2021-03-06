/**
 * Basic wrapper class for app content components
 */
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../components/Header';
import HeaderLoggedOut from '../components/HeaderLoggedOut';
import TopHeader from '../components/TopHeader';
import TopHeaderLoggedOut from '../components/TopHeaderLoggedOut';
import auth from '../utils/Auth';

const App = ({ children }) => (
  <div id="wrapper">
    <div>
      {auth.isUserAuthenticated() ? (
        <Header user={auth.getUser()} />
      ) : (
        <HeaderLoggedOut />
      )}
      </div>
      <div>
        {auth.isUserAuthenticated() ? (
          <TopHeader />
        ) : (
          <TopHeaderLoggedOut />
        )}
        </div>
    <div className="page-content-wrapper">
      <Grid fluid >
        {children}
      </Grid>
    </div>
  </div>
);

export default App;
