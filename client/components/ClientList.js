import React, { Component } from 'react';
import ClientRow from './ClientRow';

class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    this.props.clients.forEach(function(client){
      rows.push(<ClientRow key={client.name} client={client} />);
    });
    return (
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Trainer</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    );
  }
}

export default ClientList;
