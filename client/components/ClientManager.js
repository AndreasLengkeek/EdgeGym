import React, { Component } from 'react';
import ClientList from './ClientList';
import ClientForm from './ClientForm';

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
