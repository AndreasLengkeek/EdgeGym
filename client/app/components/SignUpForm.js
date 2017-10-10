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
          {errors.summary && <p>errors.summary</p>}

          <FieldGroup
            label="First Name"
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={onChange} />

          <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" className="form-control"
              name="firstname" value={user.firstname} onChange={onChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" className="form-control"
              name="lastname" value={user.lastname} onChange={onChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control"
              name="email" value={user.email} onChange={onChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" className="form-control"
              name="password" value={user.password} onChange={onChange}/>
          </div>
          <input type="submit" value="Sign Up" className="btn btn-primary"/>

          <h6>Already have an account? <Link to={'/login'}>Login</Link></h6>
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
