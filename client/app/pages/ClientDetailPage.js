import React, { Component } from 'react';
import ClientDetailContainer from '../containers/ClientDetailContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// TODO add header?
export default class ClientDetailPage extends Component {
  render() {
    return (
      <Row>
        <Col sm={6} smOffset={1}>
          <h1>Client Detail</h1>
          <ClientDetailContainer {...this.props}/>
        </Col>
      </Row>
    );
  }
}
