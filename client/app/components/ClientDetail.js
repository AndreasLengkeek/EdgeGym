import React from 'react';
import FieldGroup from './FieldGroup';

const ClientDetail = ({ client, errors, editing }) => {
  return (
    <form>
      <FieldGroup
        type="text"
        value={client.firstname}
        label="First Name" />
      <FieldGroup
        type="text"
        value={client.email}
        label="Email" />
      <FieldGroup
        type="text"
        value={client.phone}
        label="Phone" />
      <FieldGroup
        type="text"
        value={client.coach && client.coach.username}
        label="Coach" />
    </form>
  );
}

export default ClientDetail;
