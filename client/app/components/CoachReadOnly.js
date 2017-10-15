import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

const CoachReadOnly = ({ coach, error, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      {error && <p style={{color:'red'}}>{error}</p>}
      <FieldGroupStatic
        label="User Name"
        type="text"
        value={coach.username} />
      <FieldGroupStatic
        label="First Name"
        type="text"
        value={coach.firstname} />
      <FieldGroupStatic
        label="Last Name"
        type="text"
        value={coach.lastname} />
      <FieldGroupStatic
        label="Email"
        type="text"
        value={coach.email} />
      <Link to="/coaches">
        <Button type="submit" bsStyle="default">Cancel</Button>
      </Link>
      {" "}
      <Button type="submit" bsStyle="danger">Delete</Button>
    </Form>
  );
}

export default CoachReadOnly;
