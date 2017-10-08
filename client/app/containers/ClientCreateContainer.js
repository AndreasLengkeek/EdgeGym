import React, { Component } from 'react';
import axios from 'axios';
import ClientCreate from '../components/ClientCreate';

export default class ClientCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: {
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
      }
    }

    this.changeClient = this.changeClient.bind(this);
    this.createClient = this.createClient.bind(this);
  }

  changeClient(event) {
    var field = event.target.name;
    var client = this.state.client;
    client[field] = event.target.value;

    this.setState({
      client
    })
  }

  createClient(event) {
    event.preventDefault();
    console.log('submitting client:', this.state.client)
    axios.post('/api/clients', {
      client: this.state.client
    }).then(response => console.log(response))
      .catch(error => console.log(error.response));
  }

  render() {
    return (
      <ClientCreate
        client={this.state.client}
        onSubmit={this.createClient}
        onChange={this.changeClient} />
    );
  }
}
