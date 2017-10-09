import React, { Component } from 'react';
import ProgramCreateContainer from '../containers/ProgramCreateContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class ProgramCreatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col sm={6} smOffset={1}>
        <h1>Create a new program</h1>
        <ProgramCreateContainer {...this.props} />
      </Col>
    </Row>
    )
  }
}
