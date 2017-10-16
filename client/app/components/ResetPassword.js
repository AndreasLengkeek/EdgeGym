import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

/**
 * Reset password form.
 * Primarily used for users to reset after clicking email link.
 */
const ResetPassword = ({onSubmit, onChange, loading, error, user}) => (
  <Form onSubmit={onSubmit}>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <FieldGroup
      label="Email"
      type="text"
      name="email"
      value={user.email}
      onChange={onChange} />
    <FieldGroup
      label="New Password"
      type="password"
      name="password"
      value={user.password}
      onChange={onChange} />
    <FieldGroup
      label="Confirm Password"
      type="password"
      name="confirm"
      value={user.confirm}
      help={user.password !== user.confirm && "Does not match"}
      onChange={onChange} />
    <Button type="submit" disabled={loading || user.password !== user.confirm}>
      {loading ? "Loading..." : "Submit"}
    </Button>

    <h6>Remember password? <Link to="/login">Login</Link></h6>
  </Form>
);

export default ResetPassword;
