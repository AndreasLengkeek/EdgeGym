import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

const ClientDetail = ({ client, errors, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroupStatic
        label="First Name"
        value={client.firstname} />
      <FieldGroupStatic
        label="Last Name"
        value={client.lastname} />
      <FieldGroupStatic
        label="Email"
        value={client.email} />
      <FieldGroupStatic
        label="Phone"
        value={client.phone} />
      <FieldGroupStatic
        label="Coach"
        value={client.coach && client.coach.username} />
      <Button bsStyle="warning">Edit</Button>
    </Form>
  );
}

export default ClientDetail;
