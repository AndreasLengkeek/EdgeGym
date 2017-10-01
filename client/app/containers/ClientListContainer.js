import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ClientList from '../components/ClientList';
import axios from 'axios';

class ClientListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    axios.get('/api/clients')
      .then((response) => {
        this.setState({
          clients: response.data.clients
        });
      });
  }

  render() {
    return (
        <ClientList clients={this.state.clients} />
    );
  }
}

export default ClientListContainer;
