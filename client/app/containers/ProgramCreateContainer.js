import React, { Component } from 'react';
import axios from 'axios';
import auth from '../utils/Auth';
import ProgramCreate from '../components/ProgramCreate';
import moment from 'moment';

/**
 * Populate data in components with data from API.
 * Update data in DB using API functions.
 */
export default class ProgramCreateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      program: {
        client: {
          user: {}
        },
        start: moment(),
        end: moment(),
        file: '',
        createdby: auth.getUser().username
      }
    }
    this.submit = this.submit.bind(this);
    this.changeProgram = this.changeProgram.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
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

  startDateChange(date) {
    const program = this.state.program;
    program.start = date;
    this.setState({
      program
    })
  }

  endDateChange(date) {
    const program = this.state.program;
    program.end = date;
    this.setState({
      program
    })
  }

  /**
   * Updates the programs collection in database.
   */
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
        console.log(error.response);
        this.setState({
          uploading: false
        });
      });
  }

  /**
   * Uploads file to the state
   */
  fileUpload(e) {
    const f = e.target.files[0];
    this.setState({
      file: f
    });
  }

  /**
   * Obtains data from state and updates using API POST method.
   */
  createProgram(upload) {
    let {history} = this.props;
    const programSubmit = {
      user: this.state.program.client.user._id,
      createdby: auth.getUser().id,
      start: this.state.program.start.format(),
      end: this.state.program.end.format(),
      fileid: upload.fileid
    };
    console.log(programSubmit);
    axios.post('/api/programs', programSubmit).then(response => {
        history.push('/clients/'+this.state.program.client._id);
      })
      .catch(error => {
        this.setState({
          uploading: false
        })
      });
  }

  /**
   * When a program value is change update state.
   */
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
        startDate={this.startDateChange}
        endDate={this.endDateChange}
        dateChange={this.dateChange}
        fileUpload={this.fileUpload} />
    )
  }
}
