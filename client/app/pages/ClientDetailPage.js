import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientDetailContainer from '../containers/ClientDetailContainer';
import ClientProgramsContainer from '../containers/ClientProgramsContainer';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export default class ClientDetailPage extends Component {
  render() {
    return (
      <Row>
        <Col sm={6}>
          <h1>Client Detail</h1>
          <ClientDetailContainer {...this.props}/>
        </Col>
        <Col sm={12}>
          <h2>
            Client's Programs <Link to={`/programs/new/${this.props.match.params.id}`}><Button>New program</Button></Link>
          </h2>
          <ClientProgramsContainer {...this.props} />
        </Col>
      </Row>
    );
  }
}
