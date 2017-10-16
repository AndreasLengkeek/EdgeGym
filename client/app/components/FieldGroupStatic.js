import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

 /**
  * Component to be used in READY ONLY forms.
  * It is a combination of FromGroup, ControlLabel and FormControls.
  */
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
