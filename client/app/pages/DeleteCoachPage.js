import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteCoachContainer from '../containers/DeleteCoachContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';


export default class DeleteCoachPage extends Component {
  render() {
    return (
      <Row>
        <Col sm={8}>
          <h1>Are you sure you want to delete?</h1>
          <DeleteCoachContainer {...this.props}/>
        </Col>
      </Row>
    );
  }
}
