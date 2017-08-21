import React, { Component } from 'react';
import ClientRow from './ClientRow';

class ClientList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rows = this.props.clients.map(function(client, index){
      return (<ClientRow key={index} rowNum={index} client={client} />);
    });
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
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
