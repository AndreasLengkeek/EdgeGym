/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link  className="navbar-brand" to="/">Edge Gym</Link>
            </div>

            {auth.isUserAuthenticated() ? (
               <ul className="nav navbar-nav">
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/classes">Classes</Link></li>
	              <li><a onClick={(e) => {e.preventDefault()}}>Welcome {auth.getUser()}!</a></li>
                <li><Link to="/" onClick={this.logout}>Logout</Link></li>
              </ul>
		        ) : (
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            )}
          </div>
        </nav>
      </header>
	  )
  }
}
