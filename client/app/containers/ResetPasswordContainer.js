import React, { Component } from 'react';
import ResetPassword from '../components/ResetPassword';
import auth from '../utils/Auth';
import axios from 'axios';

class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      user: {
        oldpassword: '',
        newpassword: '',
        passwordconfirm: ''
      }
    };

    this.changeUser = this.changeUser.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    console.log(`${field} = ${event.target.value}`);
    this.setState({
      user
    });
  }

  resetPassword(event) {
    event.preventDefault();
    console.log('reset pword');
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }

  render() {
    return (
      <ResetPassword
        onSubmit={this.resetPassword}
        onChange={this.changeUser}
        loading={this.state.loading}
        user={this.state.user} />
    );
  }
}

export default ResetPasswordContainer;
