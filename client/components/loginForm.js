import React from 'react';

export default class LoginForm extends React.Component {
  render () {
    return (
        <div className="row">
        <div className="col-lg-3"></div>
    	<div className="col-lg-6">
    	<form method="POST" action="login">
    		<h1>Welcome to Edge Gym </h1>
    		<h2>Login</h2>
            <div className="form-group">
    		<label for="email">Email</label>
    		<input type="text" className="form-control" id="email"/>
            </div>
            <div className="form-group">
    		<label for="Password">Password</label>
    		<input type="password" className="form-control" id="pwd" />
    		</div>
            <input type="submit" value="Login" className="btn btn-primary"/>

    		</form>
    	</div>
        <div className="col-lg-3"></div>
        </div>
    );
  }
}