import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

/**
 * Lists all clients in a table format.
 * Obtain list of clients from API/Client/
 */
export default class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = this.props.clients.map(function(client, index){
      return (<ClientRow key={index} rowNum={index+1} client={client} />);
    });
    return (
      <Table hover condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Coach</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </Table>
    );
  }
}

/**
 * Create a row for each client to be listed in table in ClientList class.
 */
const ClientRow = ({rowNum, client}) => (
  <tr>
    <td>{rowNum}</td>
    <td>
      <Link to={`/clients/${client._id}`}>{`${client.user.firstname} ${client.user.lastname}`}</Link>
    </td>
    <td>{client.phone}</td>
    <td>{client.user.email}</td>
    <td>{client.coach.username}</td>
  </tr>
)
