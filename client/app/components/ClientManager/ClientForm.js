/**
 * Component to setup the components
 */
import React, { Component } from 'react';

class ClientForm extends Component {
  constructor(props) {
    super(props);
    // init form as empty
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      coach: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    // extract data from from
    var client = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      coach: this.state.coach,
      expiry: Date.now()
    }

    // link to parent method
    this.props.onNew(client);

    this.setState({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      coach: ""
    });
  }

  // handle user input
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
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" className="form-control" name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" className="form-control" name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" className="form-control" name="phone"
            value={this.state.phone}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" className="form-control" name="email"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="coach">Coach:</label>
          <input type="text" className="form-control" name="coach"
            value={this.state.coach}
            onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-default">Create New</button>
      </form>
    );
  }
}

export default ClientForm;
