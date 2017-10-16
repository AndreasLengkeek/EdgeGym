import React, { Component } from 'react';
import axios from 'axios';
import auth from '../utils/Auth';
import CoachCreate from '../components/CoachCreate';

/**
 * Communicates between component and API to create Coach.
 */
export default class CoachCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      coach: {
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      }
    }

    this.changeCoach = this.changeCoach.bind(this);
    this.createCoach = this.createCoach.bind(this);
  }
  /**
   * Update coach in state when values change.
   */
  changeCoach(event) {
    var field = event.target.name;
    var coach = this.state.coach;
    coach[field] = event.target.value;

    this.setState({
      coach
    })
  }

  /**
   * Inserts new coach in db using API.
   */
  createCoach(event) {
    event.preventDefault();
    let { history } = this.props;
    const { coach } = this.state;
    const newUser = {
      username: coach.username,
      firstname: coach.firstname,
      lastname: coach.lastname,
      email: coach.email,
      password: coach.password
    };

    axios.post('/api/users', newUser)
      .then((response) => {
        if (response.data.success) {
          history.push('/coaches');
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => {
          console.log(error);
          console.log('error = ',error.response);
      });
  }

  render() {
    return (
      <CoachCreate
        coach={this.state.coach}
        errors={this.state.errors}
        onSubmit={this.createCoach}
        onChange={this.changeCoach} />
    );
  }
}
