import React, { Component } from 'react';
import ResetPassContainer from '../containers/ResetPassContainer';

class ResetPassPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h1>Reset Password</h1>
          <ResetPassContainer {...this.props}/>
        </div>
      </div>
    )
  }
}

export default ResetPassPage;
