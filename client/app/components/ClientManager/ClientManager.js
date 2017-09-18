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
import 'whatwg-fetch';


export default class ClientManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: []
    };

    this.newClient = this.newClient.bind(this);
  }

  componentDidMount() {
    fetch('/api/clients')
      .then(res => res.json())
      .then(json => {
        this.setState({
          clients: json.clients
        });
      });
  }

  newClient(client) {
    console.log(client);
    fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'client': client })
    })
    .then(res => res.json())
    .then(json => {
      let data = this.state.clients;
      data.push(json.client);

      this.setState({
        clients: data
      });
    });
  }

  render() {
    return (
      auth.isUserAuthenticated() ? (
        <div>
          <h1>My Clients</h1>
          <ClientList clients={this.state.clients} />
          <ClientForm onNew={this.newClient} />
        </div>
      ) : (
        <Redirect to="/login" />
      )
    );
  }
}
