/**
 * Basic wrapper class for app content components
 */
import React, { Component } from 'react';

import Header from '../components/Header';

const App = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

export default App;
