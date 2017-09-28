import React, { Component } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import auth from '../../modules/Auth';

class LoginPage extends Component {
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
        console.log(response);
        auth.authenticateUser(response.data.token);
        page.props.history.push('/clients');
      }).catch((error) => {
        console.log(error.response.data);
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

export default LoginPage;
