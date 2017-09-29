/**
 * 404 component for incorrect url requests
 * @type {[type]}
 */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h2>404 - Page not found</h2>
    <p>I'm sorry the page you are looking for cannot be found!</p>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFound;
