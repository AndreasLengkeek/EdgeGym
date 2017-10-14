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

		this.logout = this.logout.bind(this);
	}

	logout(e) {
		auth.deauthenticateUser();
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
              <NavLink exact to="/" activeClassName="selected">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="selected">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/clients" activeClassName="selected">Clients</NavLink>
            </li>
            <li>
              <NavLink to="/programs" activeClassName="selected">Programs</NavLink>
            </li>
            <li>
              <NavLink to="/classes" activeClassName="selected">Classes</NavLink>
            </li>
          	<li>
          		<NavLink to="/coaches" activeClassName="selected">Admin Page</NavLink>
          	</li>
            <li>
              <Link to="/login" onClick={this.logout}>Logout</Link>
            </li>
          </ul>
      </div>
	  )
  }
}
