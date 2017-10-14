import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

const CoachDetail = ({ coach, errors, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
      label="User Name"
      type="text"
      name="username"
      value={coach.username}
      onChange={onChange} />
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={coach.firstname}
        onChange={onChange} />
      <FieldGroup
        label="Last Name"
        type="text"
        name="lastname"
        value={coach.lastname}
        onChange={onChange} />
      <FieldGroup
        label="Email"
        type="text"
        name="email"
        value={coach.email}
        onChange={onChange} />
      <Button type="submit" bsStyle="warning">Save</Button>
    </Form>
  );
}

export default CoachDetail;
