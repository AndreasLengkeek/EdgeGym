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
  <form onSubmit={onSubmit}>
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
);

export default LoginForm;
