import React, { Component } from 'react';
import axios from 'axios';
import ProgramList from '../components/ProgramList';

export default class ClientProgramsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get('/api/clients/'+id+'/programs')
      .then(response => {
        this.setState({
          programs: response.data.programs
        });
      })
      .catch(error => console.log(error.response));
  }

  render() {
    return (
      <ProgramList
        programs={this.state.programs} />
    )
  }
}
