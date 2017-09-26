import React, { Component } from 'react';

const ProgramRow = ({rowNum, program}) => (
    <tr>
      <td>{rowNum}</td>
      <td>{program.client}</td>
      <td>start</td>
      <td>end</td>
      <td>{program.createdby}</td>
      <td>{new Date(program.createddate).toDateString()}</td>
      <td><a href={`/file/${program.fileid}`} target="_blank" className="btn btn-success">Download</a></td>
    </tr>
)

export default ProgramRow;
