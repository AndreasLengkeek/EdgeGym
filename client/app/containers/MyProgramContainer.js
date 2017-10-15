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
    let id = this.props.match.params.id;
    axios.get('/api/clients/'+id+'/programs')
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