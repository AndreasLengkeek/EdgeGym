import React from 'react';
import DatePicker from 'react-datepicker';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


const FieldDatePicker = ({label, name, value, onChange}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <DatePicker selected={value} onChange={onChange} dateFormat="DD/MM/YYYY" />
    </FormGroup>
  );
}

export default FieldDatePicker;
