import React, { Component } from 'react';
import MyProfileContainer from '../containers/MyProfileContainer';

class MyProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>My Profile</h1>
        <MyProfileContainer  {...this.props}/>
      </div>
    );
  }
}

export default MyProfilePage;
