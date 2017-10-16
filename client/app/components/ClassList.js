import React, { Component } from 'react';

/**
 * Lists Classes in a list/table format
 */
export default class ClassList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //
    var rows = [];
    return (
      <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
      </table>
    );
  }
}
