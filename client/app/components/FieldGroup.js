import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

/**
 * Component to be used in forms.
 * It is a combination of FromGroup, ControlLabel and FormControls.
 */
const FieldGroup = ({ label, validation, help, success, ...props }) => {
  return (
    <FormGroup validationState={(help && "error") || (success && "success")}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
      {success && <HelpBlock>{success}</HelpBlock>}
    </FormGroup>
  );
}

export default FieldGroup;
