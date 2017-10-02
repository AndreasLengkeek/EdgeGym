import React, { Component } from 'react';
import ClientListContainer from '../containers/ClientListContainer';
import ClientFormContainer from '../containers/ClientFormContainer';
import Col from 'react-bootstrap/lib/Col';

class ClientPage extends Component {
  render() {
    return (
      <div>
        <h1>Clients</h1>
        <ClientListContainer />
      </div>
    );
  }
}

export default ClientPage;
