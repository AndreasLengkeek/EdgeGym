import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const ClientCreate = ({program, errors, onChange, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
        label="Client"
        type="text"
        name="client"
        value={program.client.firstname + ' ' + program.client.lastname}
        help={program.client}
        onChange={onChange} />
      <FieldGroup
        label="Start"
        type="text"
        name="start"
        value={program.start}
        help={program.start}
        onChange={onChange} />
      <FieldGroup
        label="End"
        type="text"
        name="end"
        value={program.end}
        help={program.end}
        onChange={onChange} />
      <FieldGroup
        label="File"
        type="file"
        name="file"
        value={program.file}
        help={program.file}
        onChange={onChange} />
      <FieldGroupStatic
        label="Created By"
        value={program.createdby.name} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ClientCreate;
