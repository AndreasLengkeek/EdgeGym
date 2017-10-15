import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

const CoachReadOnly = ({ coach, errors, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroupStatic
      label="User Name"
      type="text"
      name="username"
      value={coach.username}
      onChange={onChange} />
      <FieldGroupStatic
        label="First Name"
        type="text"
        name="firstname"
        value={coach.firstname}
        onChange={onChange} />
      <FieldGroupStatic
        label="Last Name"
        type="text"
        name="lastname"
        value={coach.lastname}
        onChange={onChange} />
      <FieldGroupStatic
        label="Email"
        type="text"
        name="email"
        value={coach.email}
        onChange={onChange} />
      <Button type="submit" bsStyle="danger">Delete</Button>
    </Form>
  );
}

export default CoachReadOnly;
