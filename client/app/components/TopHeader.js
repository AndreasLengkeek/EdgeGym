/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';

export default class TopHeader extends Component {
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
      <div id="top-bar">
      <div id="top-bar-wrapper">
          <ul className="topbar-nav">
            <li>
              <NavLink to="/profile" activeClassName="selected">My Profile</NavLink>
            </li>
          	<li>
          		<NavLink to="/coaches" activeClassName="selected">Admin Page</NavLink>
          	</li>
            <li>
              <Link to="/login" onClick={this.logout}>Logout</Link>
            </li>
          </ul>
      </div>
      </div>
	  )
  }
}
