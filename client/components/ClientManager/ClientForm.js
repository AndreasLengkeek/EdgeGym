import React, { Component } from 'react';

class ClientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      trainer: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var client = {
      name: this.state.name,
      trainer: this.state.trainer
    }

    this.props.onNew(client);
    this.setState({
      name: '',
      trainer: ''
    });
  }

  handleChange(event) {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" name="name"
            value={this.state.name}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="trainer">Trainer:</label>
          <input type="text" className="form-control" name="trainer"
            value={this.state.trainer}
            onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-default">Create New</button>
      </form>
    );
  }
}

export default ClientForm;
