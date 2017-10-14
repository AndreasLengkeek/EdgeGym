/**
 * A component for the front-end authentication
 */
import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

// TODO errors
const LoginForm = ({onSubmit, onChange, errors, user}) => (
  <Form onSubmit={onSubmit}>
    <FieldGroup
      label="Email"
      type="text"
      name="email"
      value={user.email}
      onChange={onChange} />
    <FieldGroup
      label="Password"
      type="password"
      name="password"
      value={user.password}
      onChange={onChange} />
    <Button type="submit">Submit</Button>

    <h6>Need an account? <Link to="/signup">Signup</Link></h6>
  </Form>
);

export default LoginForm;
