import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import auth from '../utils/Auth';
import axios from 'axios';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      user: {
        email: '',
        password: ''
      }
    };

    this.changeUser = this.changeUser.bind(this);
    this.login = this.login.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  login(event) {
    event.preventDefault();

    const loginSubmit = {
      email: this.state.user.email,
      password: this.state.user.password
    }

    const { history } = this.props;
    axios.post('/auth/login', loginSubmit)
      .then((response) => {
        let { token, user } = response.data;
        auth.authenticateUser(token, user);
        history.push('/');
      }).catch((error) => {
        this.setState({
          error: 'The email address or password does not match an account. Please try again'
        })
      });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.login}
        onChange={this.changeUser}
        error={this.state.error}
        user={this.state.user} />
    );
  }
}

export default LoginContainer;
