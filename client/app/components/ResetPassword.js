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
const ResetPassword = ({onSubmit, onChange, loading, user}) => (
  <Form onSubmit={onSubmit}>
    <FieldGroup
      label="Old Password"
      type="password"
      name="oldpassword"
      value={user.oldpassword}
      onChange={onChange} />
    <FieldGroup
      label="New Password"
      type="password"
      name="newpassword"
      value={user.newpassword}
      onChange={onChange} />
    <FieldGroup
      label="Confirm Password"
      type="password"
      name="passwordconfirm"
      value={user.passwordconfirm}
      onChange={onChange} />
    <Button type="submit" disabled={loading}>
      {loading ? "Loading..." : "Submit"}
    </Button>

    <h6>Remember password? <Link to="/login">Login</Link></h6>
  </Form>
);

export default ResetPassword;
