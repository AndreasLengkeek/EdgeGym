import React, { Component } from 'react';

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
      <table className="table table-hover">
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
      </table>
    );
  }
}

const ProgramRow = ({rowNum, program}) => (
    <tr>
      <td>{rowNum}</td>
      <td>{`${program.client.firstname} ${program.client.lastname}`}</td>
      <td>start</td>
      <td>end</td>
      <td>{program.createdby.username}</td>
      <td>{new Date(program.createddate).toDateString()}</td>
      <td><a href={`/file/${program.fileid}`} target="_blank" className="btn btn-success">Download</a></td>
    </tr>
)
