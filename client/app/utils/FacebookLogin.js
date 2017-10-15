import React, { Component } from 'react';
import axios from 'axios';
import auth from './Auth';

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token: props.location.search.replace('?','')
        };
    }

    componentDidMount() {
      let { token } = this.state;
      let { history } = this.props;
      auth.authenticateUser(token);
      axios.post('/auth/facebook/login')
        .then(response => {
          if (response.data.success) {
            let { jwt, user } = response.data;
            auth.authenticateUser(jwt, user);
            history.push('/');
          }
        }).catch((error) => {
           console.log("error = ",error.response);
        });
    }

    render() {
      return (
        <h1>CB</h1>
      );
    }
}
