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
        if (auth.isUserAuthenticated()) {
          const { permissions } = this.state.user;
          if (permissions && allowedRoles.includes(permissions.role)) {
            return <WrappedComponent {...this.props} />
          } else {
            return <Redirect to="/404" />
          }
        } else {
          return <Redirect to="/login" />
        }
    }
  }
}

export default Authorization;
