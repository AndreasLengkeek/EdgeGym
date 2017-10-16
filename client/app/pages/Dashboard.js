/**
 * Landing page for the app
 */
import React, { Component } from 'react';
import DashboardContainer from '../containers/DashboardContainer';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DashboardContainer />
      </div>
    );
  }
}
