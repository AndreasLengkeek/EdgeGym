import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
     super(props);
     this.state = { email: "", password: "" };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
   this.setState({email: e.target.value.toString()});
}
handlePasswordChange(e) {
   this.setState({password: e.target.value.toString()});
}


  handleSubmit(e) {
    e.preventDefault();

    alert("Email: " + this.state.email + " Password: " + this.state.password );
    /*let loginInput = this.refs.login;
    this.props.addCard(loginInput.value);
    loginInput.value = '';*/
  }


  render () {
    return (
        <div className="row">
        <div className="col-lg-3"></div>
    	<div className="col-lg-6">
    	<form id="LoginForm" onSubmit={this.handleSubmit}>
    		<h1>Welcome to Edge Gym </h1>
    		<h2>Login</h2>
            <div className="form-group">
    		<label for="email">Email</label>
    		<input type="text" className="form-control" id="email" name="password" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div className="form-group">
    		<label for="Password">Password</label>
    		<input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
    		</div>
            <input type="submit" value="Login" className="btn btn-primary"/>

    		</form>
    	</div>
        <div className="col-lg-3"></div>
        </div>
    );
  }
}
