import React, { Component } from 'react';
import MyProgramContainer from '../containers/MyProgramContainer';

class ProgramPage extends Component {
  render() {
    return (
      <div>
        <h1>Programs</h1>
        <MyProgramContainer />
      </div>
    );
  }
}

export default ProgramPage;
