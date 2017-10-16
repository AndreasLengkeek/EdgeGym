import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';

/**
 * Component to show links and navbar along top of page.
 */
export default class TopHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user : auth.getUser()
		}

		this.logout = this.logout.bind(this);
	}

  /**
   * Function to log users out when they click Logout Link.
   */
	logout(e) {
		auth.deauthenticateUser();
	}

	render() {
    return (
      <div id="top-bar">
      <div id="top-bar-wrapper">
        <span id="top-bar-user">Welcome {this.state.user.firstname}</span>
          <ul className="topbar-nav">
            <li>
              <NavLink to={`/profile/${this.state.user.id}`} activeClassName="selected">My Profile</NavLink>
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
