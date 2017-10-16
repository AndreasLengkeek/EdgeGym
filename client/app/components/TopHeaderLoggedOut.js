/**
 * Defines the app navigation bar and routes
 */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';
import auth from '../utils/Auth';

/**
 * Component to show when no user is logged in.
 * (Do not show TopHeader when no user logged in)
 */
export default class TopHeaderLoggedOut extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      <div>

      </div>
	  )
  }
}
