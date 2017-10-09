import React from 'react';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

const ClientDetail = ({ client, errors, editing, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={client.firstname}
        onChange={onChange} />
      <FieldGroup
        label="Last Name"
        type="text"
        name="lastname"
        value={client.lastname}
        onChange={onChange} />
      <FieldGroup
        label="Email"
        type="text"
        name="email"
        value={client.email}
        onChange={onChange} />
      <FieldGroup
        label="Phone"
        type="text"
        name="phone"
        value={client.phone}
        onChange={onChange} />
      <FieldGroupStatic
        label="Coach"
        value={client.coach && client.coach.username} />
      <Button type="submit" bsStyle="warning">Save</Button>
    </Form>
  );
}

export default ClientDetail;
