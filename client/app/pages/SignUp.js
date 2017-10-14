import React, { Component } from 'react';
import SignUpContainer from '../containers/SignUpContainer';

class SignUpPage extends Component {
  render() {
    return (
       <div className="row">
         <div className="col-lg-6 col-lg-offset-3">
           <h2>Create a new user</h2>
           <SignUpContainer {...this.props} />
        </div>
      </div>
    );
  }
}
export default SignUpPage;
