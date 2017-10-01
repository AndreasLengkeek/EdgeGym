import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import auth from '../utils/Auth';
import axios from 'axios';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
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
    console.log('Logging in');

    const page = this;
    axios.post('/auth/login', {
        email: this.state.user.email,
        password: this.state.user.password
      }).then((response) => {
        let { token, user } = response.data;
        auth.authenticateUser(token, user.username);
        page.props.history.push('/clients');
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.login}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user} />
    );
  }
}

export default LoginContainer;
