import React, { Component } from 'react';
import axios from 'axios';
import auth from '../utils/Auth';
import ClientCreate from '../components/ClientCreate';

/**
 * Container for ClientCreate component.
 */
export default class ClientCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      client: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        coach: auth.getUser().id
      }
    }

    this.changeClient = this.changeClient.bind(this);
    this.createClient = this.createClient.bind(this);
  }

  /**
   * Function changeClient updates state onChange from client component
   */
  changeClient(event) {
    var field = event.target.name;
    var client = this.state.client;
    client[field] = event.target.value;

    this.setState({
      client
    })
  }

  /**
   * Function createClient creates a client using api/clients
   */
  createClient(event) {
    event.preventDefault();

    let page = this;
    axios.post('/api/clients', {
      client: this.state.client
    }).then((response) => {
        if (response.data.success) {
          page.props.history.push('/clients');
        } else {
          page.setState({
            errors: response.data.errors
          })
        }
    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
      <ClientCreate
        client={this.state.client}
        errors={this.state.errors}
        onSubmit={this.createClient}
        onChange={this.changeClient} />
    );
  }
}
