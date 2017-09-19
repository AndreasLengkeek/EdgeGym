import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-lg-offset-3">
        <form action="/" onSubmit={onSubmit}>
          <h2>Create a new user</h2>
          {errors.summary && <p>errors.summary</p>}

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
        </form>
      </div>
    </div>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
