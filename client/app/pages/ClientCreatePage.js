import React, { Component } from 'react';
import ClientCreateContainer from '../containers/ClientCreateContainer';

export default class ClientCreatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Create a new Client</h1>
        <ClientCreateContainer {...this.props} />
      </div>
    )
  }
}
