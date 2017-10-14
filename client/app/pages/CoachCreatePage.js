import React, { Component } from 'react';
import CoachCreateContainer from '../containers/CoachCreateContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class CoachCreatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col sm={6} smOffset={1}>
        <h1>Create a new Coach</h1>
        <CoachCreateContainer {...this.props} />
      </Col>
    </Row>
    )
  }
}
