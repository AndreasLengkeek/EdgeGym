import React, { Component } from 'react';
import ProgramList from '../components/ProgramList';
import axios from 'axios';

class ProgramPage extends Component {
  constructor(props) {
    super(props);

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
      <ProgramList
        programs={this.state.programs} />
    );
  }
}

export default ProgramPage;
