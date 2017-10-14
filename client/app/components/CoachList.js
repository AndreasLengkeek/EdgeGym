import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/lib/Table';

export default class CoachList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = this.props.coaches.map(function(coach, index){
      return (<CoachRow key={index} rowNum={index+1} coach={coach} />);
    });
    return (
      <Table hover condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </Table>
    );
  }
}

const CoachRow = ({rowNum, coach}) => (
  <tr>
    <td>{rowNum}</td>
    <td>{coach.username}</td>
    <td>
      <Link to={`/coaches/${coach._id}`}>{`${coach.firstname} ${coach.lastname}`}</Link>
    </td>
    <td>{coach.email}</td>
  </tr>
)
