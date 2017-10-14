import React, { Component } from 'react';
import CoachListContainer from '../containers/CoachListContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

const AdminListPage = (props) => {
    return (
      <Row>
        <Col sm={12} smOffset={1}>
        <h1>
          Coaches <Link to="/coaches/new"><Button>Create new Coach</Button></Link>
        </h1>
        <CoachListContainer {...props} />
      </Col>
    </Row>
  );
}

export default AdminListPage;
