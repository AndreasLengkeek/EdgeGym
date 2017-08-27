/**
 * A component for the front-end authentication
 */
import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    // Setup initial blank state
    this.state = {  email: "", password: "" };

    // Make sure to bind the class (this) context for use in event listeners
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  /**
   * Handler to update state when user updates form inputs
   * @param  e Event wrapper object
   */
  handleInputChange(e) {
    var target = e.target;
    var value = target.value;
    var name = target.name;
    this.setState({
     [name]: value
    });
  }

  /**
   * Authenticates user input agaist server then redirects user to enter site
   * @param  e
   */
  handleSubmit(e) {
    e.preventDefault();
    alert("Email: " + this.state.email + " Password: " + this.state.password);

    // TODO Add client side validation
    // TODO Add redirect upon correct authentication
  }

  // TODO Refactor display and component logic
  // TODO Add error classes for incorrect input
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
              name="password" value={this.state.email} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label for="Password">Password</label>
              <input type="password" className="form-control" id="password"
              name="password" value={this.state.password} onChange={this.handleInputChange}/>
            </div>
            <input type="submit" value="Login" className="btn btn-primary"/>
          </form>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}