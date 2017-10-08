import React, { Component } from 'react';
import ClientCreateContainer from '../containers/ClientCreateContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ClientCreatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col sm={6} smOffset={1}>
        <h1>Create a new Client</h1>
        <ClientCreateContainer {...this.props} />
      </Col>
    </Row>
    )
  }
}
