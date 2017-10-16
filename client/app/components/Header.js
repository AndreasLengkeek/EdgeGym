import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';
import NavItem from './NavItem';

const Admin = ['admin'];
const Coach = ['coach', 'admin'];
const User = ['user'];
const All = ['user', 'coach', 'admin'];

export default class Header extends Component {
	constructor(props) {
		super(props);
    console.log(this.props);
		this.state = {
			role: this.props.user.permissions.role
		};
	}
	render() {
    return (
      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to="/">
		            <Image src="/banner.jpg" responsive/>
              </Link>
            </li>
            <NavItem allowedRoles={All} userRole={this.state.role} exact={true} path="/">Dashboard</NavItem>
            <NavItem allowedRoles={Coach} userRole={this.state.role} path="/clients">Clients</NavItem>
            <NavItem allowedRoles={User} userRole={this.state.role} path="/programs">My Programs</NavItem>
            <NavItem allowedRoles={Admin} userRole={this.state.role} path="/coaches">Admin Page</NavItem>
          </ul>
      </div>
	  )
  }
}
