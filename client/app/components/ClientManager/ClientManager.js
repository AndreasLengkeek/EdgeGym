/**
 * The main page for the clients manager component
 * This component is used for the coaches to manage their clients
 */

// DEPENDENCIES //
import React, { Component } from 'react';
import ClientList from './ClientList';
import ClientForm from './ClientForm';

// TODO move stubbed data to mongodb api
var clients = [
  { name: "Bobby Buyer", trainer: "Trainer Tom" },
  { name: "Suzy Buyer", trainer: "Trainer Jim" },
  { name: "Joe Buyer", trainer: "Trainer Tom" }
];


class ClientManager extends Component {
  constructor(props) {
    super(props);
    this.state = { clients: clients };

    this.newClient = this.newClient.bind(this);
  }

  // TODO connect to client api
  newClient(client) {
    console.log("Adding new client");
    let clientList = this.state.clients;
    clientList.push(client);
    this.setState({ clients: clientList });
  }

  render() {
    return (
      <div>
        <h1>Manage your clients </h1>
        <ClientList clients={this.state.clients} />
        <ClientForm onNew={this.newClient} />
      </div>
    );
  }
}

export default ClientManager;
