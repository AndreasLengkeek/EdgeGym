import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientListContainer from '../containers/ClientListContainer';
import ClientFormContainer from '../containers/ClientFormContainer';
import Button from 'react-bootstrap/lib/Button';


const ClientListPage = () => {
  return (
    <div>
      <h1>
        Clients <Link to="/clients/new"><Button>Create New Client</Button></Link>
      </h1>
      <ClientListContainer />
    </div>
  );
}

export default ClientListPage;
