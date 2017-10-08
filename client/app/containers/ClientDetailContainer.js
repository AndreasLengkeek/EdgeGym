import React, { Component } from 'react';
import axios from 'axios';
import ClientDetail from '../components/ClientDetail';

export default class ClientDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {
        firstname: '',
        lastname: '',
        phone: '',
        email: ''
      },
      editing: false,
      errors: {}
    }

    this.changeClient = this.changeClient.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    // get client from api
    let id = this.props.match.params.id;
    axios.get('/api/clients/'+id)
      .then((response) => {
        this.setState({
          client: response.data.client
        })
      })
      .catch(error => console.log('error', error.response));
  }

  changeClient(event) {
    const field = event.target.name;
    const client = this.state.client;
    client[field] = event.target.value;
    console.log(`${field} = ${event.target.value}`);

    this.setState({
     client
    });
  }

  // toggle readonly state to false
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  save() {
    // TODO implement return function
    // update client with api
    let { client } = this.state;
    axios.put('/api/clients', {
      client
    }).then(response => console.log(response));

    // reset fields to readonly
    this.toggleEdit();
  }

  render() {
    return (
      <ClientDetail
        client={this.state.client}
        errors={this.state.errors}
        editing={this.state.editing}
        onSubmit={this.save}
        onChange={this.changeClient} />
    )
  }
}
