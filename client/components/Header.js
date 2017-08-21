import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
  	<nav className="navbar navbar-default">
		<div className="container-fluid">
	    	<div className="navbar-header">
	      	<Link  className="navbar-brand" to="/">Edge Gym</Link>
	    	</div>
	    	<ul className="nav navbar-nav">
	     		<li><Link to="/">Home</Link></li>
	     		<li><Link to="/helloworld">Hello World</Link></li>
      			<li><Link to="/login">Login</Link></li>
      			<li><Link to="/clientmanager">Clients</Link></li>
			</ul>
		</div>
	</nav>
    <hr />
  </header>
);

export default Header;
