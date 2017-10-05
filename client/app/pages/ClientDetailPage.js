import React, { Component } from 'react';
import ClientDetailContainer from '../containers/ClientDetailContainer';

// TODO add header?
export default class ClientDetailPage extends Component {
  render() {
    return (
      <div>
        <ClientDetailContainer {...this.props}/>
      </div>
    );
  }
}
