import React, { Component } from 'react';
import ProgramList from '../components/ProgramList';
import auth from '../utils/Auth';
import axios from 'axios';

/**
 * Populates program component with program data from API.
 */
class ProgramPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    let id = auth.getUser().id;
    axios.get('/api/users/'+id+'/programs')
      .then((response) => {
        this.setState({
          programs: response.data.programs
        });
      })
      .catch((error) => console.log(error.response));
  }

  render() {
    return (
      <ProgramList
        programs={this.state.programs} />
    );
  }
}

export default ProgramPage;
