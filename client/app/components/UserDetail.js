import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

/**
 * Component to display a users details in form format.
 */
const UserDetail = ({ user, errors, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
    <FieldGroup
      label="Username"
      type="text"
      name="username"
      value={user.username}
      onChange={onChange} />
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={user.firstname}
        onChange={onChange} />
      <FieldGroup
        label="Last Name"
        type="text"
        name="lastname"
        value={user.lastname}
        onChange={onChange} />
      <FieldGroup
        label="Email"
        type="text"
        name="email"
        value={user.email}
        onChange={onChange} />

      <Button type="submit" bsStyle="warning">Save</Button>
    </Form>
  );
}

export default UserDetail;
