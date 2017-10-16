import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupDatepicker from './FieldGroupDatepicker';
import FieldGroupStatic from './FieldGroupStatic';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import DatePicker from 'react-datepicker';

/**
 * Component to display form for creating a program.
 */
const ProgramCreate = ({program, errors, onChange, startDate, endDate, onSubmit, fileUpload}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroupStatic
        label="Client"
        value={`${program.client.user.firstname} ${program.client.user.lastname}`} />
      <FieldGroupDatepicker label="Start" name="start" value={program.start} onChange={startDate} />
      <FieldGroupDatepicker label="End" name="end" value={program.end} onChange={endDate} />
      <FieldGroup
        label="File"
        type="file"
        name="file"
        onChange={fileUpload} />
      <FieldGroupStatic
        label="Created By"
        value={program.createdby} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ProgramCreate;
