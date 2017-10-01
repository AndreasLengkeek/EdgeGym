import React, { Component } from 'react';
import ClientListContainer from '../containers/ClientListContainer';
import ClientFormContainer from '../containers/ClientFormContainer';

class ClientPage extends Component {
  render() {
    return (
      <div>
        <h1>Clients</h1>
        <ClientListContainer />
        <ClientFormContainer />
      </div>
    );
  }
}

export default ClientPage;
