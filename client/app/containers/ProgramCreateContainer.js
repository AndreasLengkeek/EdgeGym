import React, { Component } from 'react';
import axios from 'axios';
import auth from '../utils/Auth';
import ProgramCreate from '../components/ProgramCreate';

export default class ProgramCreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      program: {
        client: {},
        file: '',
        createdby: auth.getUser().username
      }
    }
    this.submit = this.submit.bind(this);
    this.changeProgram = this.changeProgram.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.createProgram = this.createProgram.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.clientid;
    axios.get('/api/clients/'+id)
      .then((response) => {
        let program = this.state.program;
        program.client = response.data.client;
        this.setState({
          program
        })
      })
      .catch(error => console.log('error', error.response));
  }

  submit(event) {
    event.preventDefault();
    this.setState({
      uploading: true
    });

    let data = new FormData();
    data.append("file", this.state.file);

    axios.post('/api/programs', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
        this.createProgram(response.data);
      })
      .catch(error => {
        this.setState({
          uploading: false
        });
      });
  }

  fileUpload(e) {
    const f = e.target.files[0];
    this.setState({
      file: f
    });
  }

  createProgram(upload) {
    let history = this.props.history;
    axios.post('/api/programs', {
        client: this.state.program.client._id,
        createdby: auth.getUser().id,
        fileid: upload.fileid
      }).then(response => {
        history.push('/programs');
      })
      .catch(error => {
        this.setState({
          uploading: false
        })
      });
  }

  changeProgram(event) {
    var field = event.target.name;
    var program = this.state.program;
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
        onChange={this.changeProgram}
        fileUpload={this.fileUpload} />
    )
  }
}
