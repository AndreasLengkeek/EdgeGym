import React, { Component } from 'react';
import axios from 'axios';
import UserDetail from '../components/UserDetail';

/**
 * Passes data from API to components
 */
export default class MyProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        firstname: '',
        lastname: '',
        email: ''
      },
      editing: true,
      errors: {}
    }

    this.changeuser = this.changeuser.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    // get user from api
    let id = this.props.match.params.id;
    console.log(id);
    axios.get('/api/users/'+id)
      .then((response) => {
        this.setState({
          user: response.data.user

        })
      })
      .catch(error => console.log('error', error.response));

  }

  /**
   * Update state with new value from component
   */
  changeuser(event) {
    const field = event.target.name;
    const user = this.state.user;
    console.log(`${field}: ${event.target.value}`)
    user[field] = event.target.value;

    this.setState({
     user
    });
  }

  /**
   * Toggle readonly in state
   */
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  /**
   * Save details to user api.
   */
  save(event) {
    event.preventDefault();
    let { user } = this.state;
    console.log('submitting', user)
    axios.put('/api/users/'+user._id, {
      user
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
      <UserDetail
        user={this.state.user}
        errors={this.state.errors}
        editing={this.state.editing}
        onSubmit={this.save}
        onChange={this.changeuser} />
    )
  }
}
