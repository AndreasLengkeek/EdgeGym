/**
 * Component to reset password
 */
import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

// TODO errors
const ResetPassForm = ({onSubmit, onChange, errors, user}) => (
  <Form onSubmit={onSubmit}>
    <FieldGroup
      label="Email"
      type="text"
      name="email"
      value={user.email}
      onChange={onChange} />
    <HelpBlock>Enter the email used with your account</HelpBlock>
    <Button type="submit">Submit</Button>

    <h6>Remember password? <Link to="/login">Login</Link></h6>
  </Form>
);

export default ResetPassForm;
