/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <div id="sidebar-wrapper">
        {auth.isUserAuthenticated() ? (
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to="/">
		            <Image src="/banner.jpg" responsive/>
              </Link>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/login" onClick={this.logout}>Logout</Link>
            </li>
          </ul>
        ) : (
            <ul className="sidebar-nav">
              <li className="sidebar-brand">
                <Link to="/">Edge Gym</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
        )}
      </div>
	  )
  }
}
