import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoachDetailContainer from '../containers/CoachDetailContainer';
import ClientListContainer from '../containers/ClientListContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


export default class CoachDetailPage extends Component {
  render() {
    return (
      <Row>
        <Col sm={6}>
          <h1>Coach Detail</h1>
          <CoachDetailContainer {...this.props}/>
        </Col>
        <Col sm={12}>
          <h2>
            Coach Clients
          </h2>
          <ClientListContainer {...this.props} />
        </Col>
      </Row>
    );
  }
}
