import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

/**
 * Class to display coaches in a list within table format.
 * Obtain from API/USERS
 */
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </Table>
    );
  }
}

/**
 * Compoent to display each coach within a row.
 */
const CoachRow = ({rowNum, coach}) => (
  <tr>
    <td>{rowNum}</td>
    <td>{coach.username}</td>
    <td>
      <Link to={`/coaches/${coach._id}`}>{`${coach.firstname} ${coach.lastname}`}</Link>
    </td>
    <td>{coach.email}</td>
      <td>
          <Link to={`/coaches/delete/${coach._id}`}><Button bsStyle="danger" bsSize="xs">Delete</Button></Link>
          {" "}
          <Link to={`/coaches/${coach._id}`}><Button bsStyle="primary" bsSize="xs">View</Button></Link>
      </td>
  </tr>
)
