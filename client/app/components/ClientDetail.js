import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from './FieldGroup';
import FieldGroupStatic from './FieldGroupStatic';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';

/**
 * Component to show client details in a form format.
 * User can edit and save.
 */
const ClientDetail = ({ client, errors, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FieldGroupStatic
        label="First Name"
        value={client.user.firstname} />
      <FieldGroupStatic
        label="Last Name"
        value={client.user.lastname} />
      <FieldGroupStatic
        label="Email"
        value={client.user.email} />
      <FieldGroupStatic
        label="Phone"
        value={client.phone} />
      <FieldGroupStatic
        label="Coach"
        value={client.coach && client.coach.username} />
      <Link to="/clients">
        <Button bsStyle="default">Back</Button>
      </Link>
    </Form>
  );
}

export default ClientDetail;
