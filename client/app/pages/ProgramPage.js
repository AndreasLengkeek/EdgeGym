import React, { Component } from 'react';
import ProgramContainer from '../containers/ProgramListContainer';

class ProgramPage extends Component {
  render() {
    return (
      <div>
        <h1>Programs</h1>
        <ProgramContainer />
      </div>
    );
  }
}

export default ProgramPage;
