import React, { Component } from 'react';
import axios from 'axios';
import ClientDetail from '../components/ClientDetail';

/**
 * Container for client detail components.
 * Has functions to grab data from api and pass to component.
 */
export default class ClientDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {
        user: {},
        coach: {}
      },
      editing: true,
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

  /**
   * Update client state with new values onChange.
   */
  changeClient(event) {
    const field = event.target.name;
    const client = this.state.client;
    console.log(`${field}: ${event.target.value}`)
    client[field] = event.target.value;

    this.setState({
     client
    });
  }

  /**
   * Toggle readonly state
   */
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  /**
   * Save client in state to database useing api call.
   */
  save(event) {
    event.preventDefault();
    let { client } = this.state;
    console.log('submitting', client)
    axios.put('/api/clients/'+client._id, {
      client
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
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
