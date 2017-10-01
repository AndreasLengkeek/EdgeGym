import React, { Component } from 'react';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //
    var rows = this.props.clients.map(function(client, index){
      return (<ClientRow key={index} rowNum={index+1} client={client} />);
    });
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Coach</th>
              <th>Gym Expiry</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
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
    <td>{client.coach}</td>
    <td>{new Date(client.expiry).toDateString()}</td>
  </tr>
)
