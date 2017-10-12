import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const ProgramCreate = ({program, errors, onChange, onSubmit, fileUpload}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroupStatic
        label="Client"
        value={`${program.client.firstname} ${program.client.lastname}`} />
      <FieldGroup
        label="Start"
        type="text"
        name="start"
        value={program.start}
        help={errors.start}
        onChange={onChange} />
      <FieldGroup
        label="End"
        type="text"
        name="end"
        value={program.end}
        help={errors.end}
        onChange={onChange} />
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
