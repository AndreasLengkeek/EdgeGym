import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../utils/Auth';

const Authorization = (allowedRoles) => (WrappedComponent) => {
  return class WithAuth extends Component {
    constructor(props) {
      super(props)

      this.state = {
          user: auth.getUser()
      }
    }

    render() {
      const { role } = this.state.user.permissions;
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to="/404" />;
      }
    }
  }
}

export default Authorization;
