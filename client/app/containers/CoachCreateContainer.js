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
        password: '',
        coach: auth.getUser().id
      }
    }

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

    console.log('submitting coach:', this.state.coach)
    let page = this;

    axios.post('/api/coaches', {
      coach: this.state.coach
    }).then((response) => {
        if (response.data.success) {
          page.props.history.push('/coaches');
        } else {
          page.setState({
            errors: response.data.errors
          })
        }
    })
    .catch(error => {
        console.log(error);
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
