import React, { Component } from 'react';
import axios from 'axios';
import ProgramCreate from '../components/ProgramCreate';

export default class ProgramCreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      program: {
        client: '',
        file: '',
        createdby: ''
      }
    }
    this.submit = this.submit.bind(this);
    this.changeProgram = this.changeProgram.bind(this);
  }

  submit(event) {
    event.preventDefault();
  }

  changeProgram(event) {
    var field = event.target.name;
    var program = this.state.program;
    if (field === 'file')
      program[field] = event.target.files;
    else
      program[field] = event.target.files;

    this.setState({
      program
    });
  }

  render() {
    return (
      <ProgramCreate
        program={this.state.program}
        errors={this.state.errors}
        onSubmit={this.submit}
        onChange={this.changeProgram} />
    )
  }
}
