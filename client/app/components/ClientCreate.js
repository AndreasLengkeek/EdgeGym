import React from 'react';
import FieldGroup from './FieldGroup';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

/**
 * Component form to create a client.
 *
 */
// TODO possibly remove client model so this is obsolete.
const ClientCreate = ({client, errors, onChange, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroup
        label="First Name"
        type="text"
        name="firstname"
        value={client.firstname}
        help={errors.firstname}
        onChange={onChange} />
      <FieldGroup
        label="Last Name"
        type="text"
        name="lastname"
        value={client.lastname}
        help={errors.lastname}
        onChange={onChange} />
      <FieldGroup
        label="Email"
        type="text"
        name="email"
        value={client.email}
        help={errors.email}
        onChange={onChange} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ClientCreate;
