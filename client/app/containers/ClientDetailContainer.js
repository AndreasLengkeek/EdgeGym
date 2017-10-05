import React, { Component } from 'react';
import axios from 'axios';
import ClientDetail from '../components/ClientDetail';

export default class ClientDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {

      },
      editing: false,
      errors: {}
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    // get client from api
    console.log(this);
    let id = this.props.match.params.id;
    console.log(`Getting client with id: ${id}`);
    axios.get('/api/client/'+id)
      .then((response) => {
        console.log(response);
        this.setState({
          client: response.data.client
        })
      })
      .catch(error => console.log(error.response));
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
    axios.put('', {
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
        editing={this.state.editing} />
    )
  }
}
