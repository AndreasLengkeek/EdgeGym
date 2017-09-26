/**
 * The main page for the clients manager component
 * This component is used for the coaches to manage their clients
 */

// DEPENDENCIES //
import React, { Component } from 'react';
import ClientList from './ClientList';
import ClientForm from './ClientForm';
import axios from 'axios';
import auth from '../../modules/Auth'
import { Redirect } from 'react-router-dom';


export default class ClientManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
    };

    this.newClient = this.newClient.bind(this);
  }

  componentDidMount() {
    axios.get('/api/clients')
      .then((response) => {
        this.setState({
          clients: response.data.clients
        });
      });
  }

  newClient(client) {
    console.log(client);
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
      <div>
        <h1>My Clients</h1>
        <ClientList clients={this.state.clients} />
        <ClientForm onNew={this.newClient} />
      </div>
    );
  }
}
