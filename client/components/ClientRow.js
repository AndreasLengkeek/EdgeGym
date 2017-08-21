import React, { Component } from 'react';

class ClientRow extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.client);
  }

  render() {
    return (
      <tr>
        <td>{this.props.client.name}</td>
        <td>{this.props.client.trainer}</td>
      </tr>
    );
  }
}

export default ClientRow;
