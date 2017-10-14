import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CoachList from '../components/CoachList';
import axios from 'axios';
import auth from '../utils/Auth';

class CoachListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coaches: []
    };
  }

  componentDidMount() {
    let page = this;
    axios.get('/api/users')
      .then((response) => {
        this.setState({
          coaches: response.data.users
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          auth.deauthenticateUser();
          page.props.history.push('/login');
        }
      });
  }

  render() {
    return (
        <CoachList coaches={this.state.coaches} />
    );
  }
}

export default CoachListContainer;
