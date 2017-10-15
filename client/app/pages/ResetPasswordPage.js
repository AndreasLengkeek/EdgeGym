import React, { Component } from 'react';
import ResetPasswordContainer from '../containers/ResetPasswordContainer';

class ResetPasswordPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Reset Password</h1>
          <ResetPasswordContainer {...this.props}/>
        </div>
      </div>
    )
  }
}

export default ResetPasswordPage;
