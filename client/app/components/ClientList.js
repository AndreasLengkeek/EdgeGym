import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table';

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
              <th>First Name</th>
              <th>Last Name</th>
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

const ClientRow = ({rowNum, client}) => (
  <tr>
    <td>{rowNum}</td>
    <td>{client.firstname}</td>
    <td>{client.lastname}</td>
    <td>{client.phone}</td>
    <td>{client.email}</td>
    <td>{client.coach.username}</td>
  </tr>
)
