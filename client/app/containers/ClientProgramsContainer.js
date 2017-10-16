import React, { Component } from 'react';
import axios from 'axios';
import ProgramList from '../components/ProgramList';

/**
 * Retrieves program data and populates component
 */
export default class ClientProgramsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    axios.get('/api/clients/'+id+'/programs')
      .then(response => {
        console.log(response.data.programs);
        this.setState({
          programs: response.data.programs
        });
      })
      .catch(error => {
          console.log(error);
          console.log('error = ',error.response);
      });
  }

  render() {
    return (
      <ProgramList
        programs={this.state.programs} />
    )
  }
}
