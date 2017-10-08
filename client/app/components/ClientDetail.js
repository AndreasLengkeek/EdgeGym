import React from 'react';
import FieldGroup from './FieldGroup';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const ClientDetail = ({ client, errors, editing, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <FieldGroup
        type="text"
        value={client.firstname}
        name="firstname"
        label="First Name"
        onChange={onChange} />
      <FieldGroup
        type="text"
        value={client.email}
        name="email"
        label="Email"
        onChange={onChange} />
      <FieldGroup
        type="text"
        value={client.phone}
        name="phone"
        label="Phone"
        onChange={onChange} />
      <FormGroup>
        <ControlLabel>Coach</ControlLabel>
        <FormControl.Static>
          {client.coach && client.coach.username}
        </FormControl.Static>
      </FormGroup>
      <Button>Click Me!</Button>
    </form>
  );
}

export default ClientDetail;
