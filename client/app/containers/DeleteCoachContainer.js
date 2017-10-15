import React, { Component } from 'react';
import axios from 'axios';
import CoachReadOnly from '../components/CoachReadOnly';

export default class DeleteCoachContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      coach: {
        username: '',
        firstname: '',
        lastname: '',
        email: ''
      }
    }

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    // get coach from api
    let id = this.props.match.params.id;
    axios.get('/api/users/'+id)
      .then((response) => {
        this.setState({
          coach: response.data.user
        })
      })
      .catch(error => console.log('error', error));
  }

  delete(event) {
    event.preventDefault();
    let { coach } = this.state;
    let { history } = this.props;
    axios.delete('/api/users/'+coach._id)
      .then(response => {
        console.log('response = ',response);
        history.push('/coaches');
      }).catch(error => {
        console.log('error = ', error.response);
        this.setState({
          error: error.response.data.error
        });
      });
  }

  render() {
    return (
      <CoachReadOnly
        coach={this.state.coach}
        error={this.state.error}
        editing={this.state.editing}
        onSubmit={this.delete} />
    )
  }
}
