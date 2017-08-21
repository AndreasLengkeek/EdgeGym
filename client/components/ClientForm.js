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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Trainer:
          <input type="text" name="trainer" value={this.state.trainer} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create New" />
      </form>
    );
  }
}

export default ClientForm;
