import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

export default class ProgramList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //
    var rows = this.props.programs.map(function(program, index){
      return (<ProgramRow key={index} rowNum={index+1} program={program} />);
    });
    return (
      <Table hover condensed>
          <thead>
            <tr>
              <th>#</th>
              <th>Client Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Created By</th>
              <th>Created Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </Table>
    );
  }
}

const ProgramRow = ({rowNum, program}) => (
    <tr>
      <td>{rowNum}</td>
      <td>{`${program.client.firstname} ${program.client.lastname}`}</td>
      <td>today</td>
      <td>tomorrow</td>
      <td>{program.createdby.username}</td>
      <td>{new Date(program.createddate).toDateString()}</td>
      <td><Button href={`/file/${program.fileid}`} target="_blank" bsStyle="success">Download</Button></td>
    </tr>
)
