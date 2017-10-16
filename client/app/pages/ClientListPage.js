import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientListContainer from '../containers/ClientListContainer';
import ClientFormContainer from '../containers/ClientFormContainer';
import Button from 'react-bootstrap/lib/Button';


const ClientListPage = (props) => {
  return (
    <div>
      <h1>
        Clients
      </h1>
      <ClientListContainer {...props} />
    </div>
  );
}

export default ClientListPage;
