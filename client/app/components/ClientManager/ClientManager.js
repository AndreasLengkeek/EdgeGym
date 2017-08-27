/**
 * The main page for the clients manager component
 * This component is used for the coaches to manage their clients
 */

// DEPENDENCIES //
import React, { Component } from 'react';
import ClientList from './ClientList';
import ClientForm from './ClientForm';
import 'whatwg-fetch';

// var clients = [
//   { firstname: "Bobby", lastname: "Buyer", phone: "0499888777", email: "bobby.buyer@email.com", coach: "Trainer Tom", expiry: Date.now() },
//   { firstname: "Suzy", lastname: "Buyer", phone: "0477888999", email: "suzy.buyer@email.com", coach: "Trainer Jim", expiry: Date.now() },
//   { firstname: "Joe", lastname:"Buyer", phone: "0466555666", email: "joe.buyer@email.com", coach: "Trainer Tom", expiry: Date.now() }
// ];


class ClientManager extends Component {
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
          clients: json
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
      <div>
        <h1>My Clients</h1>
        <ClientList clients={this.state.clients} />
        <ClientForm onNew={this.newClient} />
      </div>
    );
  }
}

export default ClientManager;
