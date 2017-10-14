/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    /*
     * Render a navigation with the following.
     */
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <Link to="/">
              <Image src="/banner.jpg" responsive/>
            </Link>
          </li>
          <li>
            <NavLink to="/login" activeClassName="selected">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="selected">Sign Up</NavLink>
          </li>
        </ul>
      </div>
	  )
  }
}
