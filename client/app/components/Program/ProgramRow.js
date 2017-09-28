import React, { Component } from 'react';

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

export default ProgramRow;
