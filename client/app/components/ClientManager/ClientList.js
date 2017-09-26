import React, { Component } from 'react';
import ClientRow from './ClientRow';

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
