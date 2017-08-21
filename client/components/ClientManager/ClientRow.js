import React, { Component } from 'react';

class ClientRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.rowNum}</td>
        <td>{this.props.client.name}</td>
        <td>{this.props.client.trainer}</td>
      </tr>
    );
  }
}

export default ClientRow;
