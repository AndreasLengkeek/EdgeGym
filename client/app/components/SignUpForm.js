import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({ onSubmit, onChange, errors, user}) => {
  return (
        <Form onSubmit={onSubmit}>
          {errors.summary && <p>{errors.summary}</p>}
          <FieldGroup
            label="Email"
            name="email"
            type="text"
            value={user.email}
            help={errors.email}
            onChange={onChange} />
          <FieldGroup
            label="Password"
            type="password"
            name="password"
            value={user.password}
            help={errors.password}
            onChange={onChange} />
          <FieldGroup
            label="Username"
            type="text"
            name="username"
            value={user.username}
            help={errors.username}
            onChange={onChange} />
          <FieldGroup
            label="First Name"
            type="text"
            name="firstname"
            value={user.firstname}
            help={errors.firstname}
            onChange={onChange} />
          <FieldGroup
            label="Last Name"
            type="text"
            name="lastname"
            value={user.lastname}
            help={errors.lastname}
            onChange={onChange} />
          <Button type="submit">Submit</Button>

          <h6>Already have an account? <Link to="/login">Login</Link></h6>
        </Form>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
