import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ClientForm from '../components/ClientForm';
import axios from 'axios';

class ClientFormContainer extends Component {
  constructor(props) {
    super(props);

    this.newClient = this.newClient.bind(this);
  }

  newClient(client) {
    axios.post('/api/clients', {
     client: client
    }).then((response) => {
      let data = this.state.clients;
      data.push(response.data.client);

      this.setState({
        clients: data
      });
    });
  }

  render() {
    return (
        <ClientForm onNew={this.newClient} />
    );
  }
}

export default ClientFormContainer;
