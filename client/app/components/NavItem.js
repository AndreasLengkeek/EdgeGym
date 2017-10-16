import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Component created to easily create a Nav Item by
 * Using HTML and React router dom elements
 */
const NavItem = ({allowedRoles, userRole, exact, path, children}) => {
  console.log(allowedRoles);
  console.log(userRole);
  const allowed = allowedRoles.includes(userRole);
  return (
      <li className={allowed ? '' : 'hidden'}>
        <NavLink exact={exact} to={path} activeClassName="selected">{children}</NavLink>
      </li>
    );
};

export default NavItem;
