import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Login Here!</h1>
          <LoginContainer {...this.props}/>
        </div>
      </div>
    )
  }
}

export default Login;
