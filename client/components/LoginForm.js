/**
 * LoginForm.js is the React.Component to display the login form for
 * Users to login into their accounts in the web app.
 */

import React from 'react';

/**
 * The class which can be exported for LoginForm
 */
export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    // Create state so onChange listeners do not have null exceptions.
    this.state = {  email: "", password: "" };

    // Bind functions to class within constructor so we can use the
    // value and onChange listeners
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

/**
 * Sets the state for this.state.email
 * Should be set as the email input onChange function.
 *  @param  e
 */
  handleEmailChange(e) {
    this.setState({email: e.target.value.toString()});
  }

  /**
   * Sets the state for this.state.password.
   * Should be set as the password input onChange function.
   * @param  e
   */
  handlePasswordChange(e) {
    this.setState({password: e.target.value.toString()});
  }

/**
 * Handles the login by checking the state.email and state.password
 * This should be tied to the Submit buttons onClick lisenter
 * @param  e
 */
  handleSubmit(e) {
    e.preventDefault();
    alert("Email: " + this.state.email + " Password: " + this.state.password);
  }

// TODO Tidy up the React Component to minimalise the display vs the logic
  render() {
    return (
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form id="LoginForm" onSubmit={this.handleSubmit}>
            <h1>Welcome to Edge Gym
            </h1>
            <h2>Login</h2>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="text" className="form-control" id="email"
              name="password" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div className="form-group">
              <label for="Password">Password</label>
              <input type="password" className="form-control" id="password"
              name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            <input type="submit" value="Login" className="btn btn-primary"/>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}
