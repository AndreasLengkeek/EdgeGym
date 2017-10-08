import React from 'react';
import FieldGroup from './FieldGroup';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const ClientCreate = ({client, onChange, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={client.firstname}
        onChange={onChange} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ClientCreate;
