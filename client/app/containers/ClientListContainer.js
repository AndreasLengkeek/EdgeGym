import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ClientList from '../components/ClientList';
import axios from 'axios';
import auth from '../utils/Auth';

class ClientListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    let page = this;
    axios.get('/api/clients')
      .then((response) => {
        this.setState({
          clients: response.data.clients
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
        <ClientList clients={this.state.clients} />
    );
  }
}

export default ClientListContainer;
