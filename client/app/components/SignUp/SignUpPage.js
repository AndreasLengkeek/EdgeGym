import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
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
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    console.log('Processing form');

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
        user={this.state.user} />
    );
  }
}

// SignUpPage.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default SignUpPage;
