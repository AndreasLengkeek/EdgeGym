import React, { Component } from 'react';
import ClientList from '../components/ClientList';
import ProgramList from '../components/ProgramList';
import axios from 'axios';
import auth from '../utils/Auth';

const Coach = ['admin', 'coach'];
const User = ['user'];

/**
 * Calls component and populates with data received from API
 */
class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    var user = auth.getUser();

    this.state = {
      programs: [],
      clients: [],
      user
    };

    this.getClients = this.getClients.bind(this);
    this.getPrograms = this.getPrograms.bind(this);
  }

  componentDidMount() {
    const { permissions } = this.state.user;
    if (Coach.includes(permissions.role)) {
      this.getClients();
    } else {
      this.getPrograms();
    }
  }

  /**
   * Returns clients using API/Clients
   */
  getClients() {
    let page = this;
    axios.get('/api/clients')
      .then((response) => {
        this.setState({
          clients: response.data.clients
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          auth.deauthenticateUser();
          page.props.history.push('/login');
        }
      });
  }

  /**
   * Returns programs using API/Users
   */
  getPrograms() {
    let id = auth.getUser().id;
    axios.get('/api/users/'+id+'/programs')
      .then((response) => {
        this.setState({
          programs: response.data.programs
        });
      })
      .catch((error) => console.log(error.response));
  }

  render() {
    const { permissions } = this.state.user;
    if (Coach.includes(permissions.role)) {
      return (
        <div>
          <h1>Check out your new clients!</h1>
          <ClientList clients={this.state.clients} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Check out your new programs!</h1>
          <ProgramList programs={this.state.programs} />
        </div>
      );
    }
  }
}

export default DashboardContainer;
