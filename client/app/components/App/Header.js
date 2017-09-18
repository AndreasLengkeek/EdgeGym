/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../modules/Auth';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	logout(e) {
		e.preventDefault();
		auth.deauthenticateUser();
	}

	render() {
	  return (<header>
	  	<nav className="navbar navbar-default">
			<div className="container-fluid">
		    	<div className="navbar-header">
		      	<Link  className="navbar-brand" to="/">Edge Gym</Link>
		    	</div>
		    	<ul className="nav navbar-nav">
		     		<li><Link to="/">Home</Link></li>
	      			<li><Link to="/login">Login</Link></li>
	      			<li><Link to="/clients">My Clients</Link></li>
	      			<li><Link to="/" onClick={this.logout}>Logout</Link></li>
				</ul>
			</div>
		</nav>
	  </header>
  )
	}
}
