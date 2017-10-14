import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm';
import auth from '../utils/Auth';
import axios from 'axios';

class SignUpContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      }
    };

    this.signUp = this.signUp.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

   /**
    * Try create a new user
    *
    * @param {object} event - the JavaScript event object
    */
  signUp(event) {
    event.preventDefault();
    console.log(this.props);
    let { history } = this.props;

    const { user } = this.state;
    axios.post('/auth/signup', user)
      .then(response => {
        console.log('success = ', response.data);
        if (response.data.success) {
          let { token, user } = response.data;
          auth.authenticateUser(token, user);
          history.push('/');
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => {
        console.log(error);
        console.log("error = ", error.reponse);
      })
  }

   /**
    * Change the user object.
    *
    * @param {object} event - the JavaScript event object
    */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.signUp}
        onChange={this.changeUser}
        errors={this.state.errors}
        message={this.state.message}
        user={this.state.user} />
    );
  }
}

export default SignUpContainer;
