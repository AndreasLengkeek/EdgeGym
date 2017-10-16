/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';

/**
 * Component to show navigation with login or register items.
 */
export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
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
