import React from 'react';

// component imports
import Field from './Field';
import Button from './Button';

// renders out both the button and field for the components
const UserCreate = (props) => {
  return (
    <div className="ui form">
      <Field />
      <Button />
    </div>
  );
};

export default UserCreate;
