import React, { Component } from 'react';

export default class ClientRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.rowNum}</td>
        <td>{this.props.client.firstname}</td>
        <td>{this.props.client.lastname}</td>
        <td>{this.props.client.phone}</td>
        <td>{this.props.client.email}</td>
        <td>{this.props.client.coach}</td>
        <td>{new Date(this.props.client.expiry).toDateString()}</td>
      </tr>
    );
  }
}
