import React, { Component } from 'react';
import ProgramList from './ProgramList';
import axios from 'axios';

class ProgramPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    axios.get('api/programs')
      .then((response) => {
        this.setState({
          programs: response.data.programs
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Programs</h1>
        <ProgramList
          programs={this.state.programs}
          />
      </div>
    );
  }
}

export default ProgramPage;
