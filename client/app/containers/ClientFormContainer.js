import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ClientForm from '../components/ClientForm';
import axios from 'axios';

/**
 * Functions to display client details in component
 */
class ClientFormContainer extends Component {
  constructor(props) {
    super(props);

    this.newClient = this.newClient.bind(this);
  }

  /**
   * Obtain a client from api clients.
   */
  newClient(client) {
    axios.post('/api/clients', {
     client: client
    }).then((response) => {
        let data = this.state.clients;
        data.push(response.data.client);

        this.setState({
          clients: data
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
        <ClientForm onNew={this.newClient} />
    );
  }
}

export default ClientFormContainer;
