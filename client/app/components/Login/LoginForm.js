/**
 * A component for the front-end authentication
 */
import React from 'react';

// TODO errors
const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className="row">
    <div className="col-lg-6 col-lg-offset-3">
      <form onSubmit={onSubmit}>


        <h2>Login to Edge Gym</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control"
          name="email" value={user.email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" className="form-control"
          name="password" value={user.password} onChange={onChange}/>
        </div>
        <input type="submit" value="Login" className="btn btn-primary"/>
      </form>
    </div>
  </div>
);

export default LoginForm;
