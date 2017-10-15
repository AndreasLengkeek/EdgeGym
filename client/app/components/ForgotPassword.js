/**
 * Component to reset password
 */
import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const ForgotPassword = ({onSubmit, onChange, loading, error, message, email}) => (
  <Form onSubmit={onSubmit}>
    <FieldGroup
      label="Email"
      type="text"
      help={error}
      success={message}
      value={email}
      onChange={onChange} />
    <HelpBlock>Enter the email used with your account</HelpBlock>
    <Button type="submit" disabled={loading}>
      {loading ? "Loading..." : "Submit"}
    </Button>

    <h6>Remember password? <Link to="/login">Login</Link></h6>
  </Form>
);

export default ForgotPassword;
