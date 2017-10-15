import React, { Component } from 'react';
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';

class ForgotPasswordPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Forgot Password</h1>
          <ForgotPasswordContainer {...this.props}/>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordPage;
