import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const FieldGroupStatic = ({ label, value }) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl.Static>
          {value}
      </FormControl.Static>
    </FormGroup>
  );
}

export default FieldGroupStatic;
