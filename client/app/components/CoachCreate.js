import React from 'react';
import FieldGroup from './FieldGroup';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

/**
 * Form compoent to create a coach.
 */
const CoachCreate = ({coach, errors, onChange, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
        label="User Name"
        type="text"
        name="username"
        value={coach.username}
        help={errors.username}
        onChange={onChange} />
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={coach.firstname}
        help={errors.firstname}
        onChange={onChange} />
      <FieldGroup
        label="Last Name"
        type="text"
        name="lastname"
        value={coach.lastname}
        help={errors.lastname}
        onChange={onChange} />
      <FieldGroup
        label="Email"
        type="text"
        name="email"
        value={coach.email}
        help={errors.email}
        onChange={onChange} />
      <FieldGroup
        label="Password"
        type="password"
        name="password"
        value={coach.password}
        help={errors.password}
        onChange={onChange} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default CoachCreate;
