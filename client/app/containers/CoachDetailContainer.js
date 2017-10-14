import React, { Component } from 'react';
import axios from 'axios';
import CoachDetail from '../components/CoachDetail';

export default class CoachDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coach: {
        username: '',
        firstname: '',
        lastname: '',
        email: ''
      },
      editing: true,
      errors: {}
    }

    this.changeCoach = this.changeCoach.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    // get coach from api
    let id = this.props.match.params.id;
    axios.get('/api/users/'+id)
      .then((response) => {
        this.setState({
          coach: response.data.user
        })
      })
      .catch(error => console.log('error', error));
  }

  changeCoach(event) {
    const field = event.target.name;
    const coach = this.state.coach;
    console.log(`${field}: ${event.target.value}`)
    coach[field] = event.target.value;

    this.setState({
     coach
    });
  }

  // toggle readonly state to false
  toggleEdit() {
    this.setState({
      editing: !this.state.editing
    })
  }

  save(event) {
    event.preventDefault();
    let { coach } = this.state;
    console.log('submitting', coach)
    axios.put('/api/users/'+coach._id, {
      coach
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
      <CoachDetail
        coach={this.state.coach}
        errors={this.state.errors}
        editing={this.state.editing}
        onSubmit={this.save}
        onChange={this.changeCoach} />
    )
  }
}
