import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  // the children prop is whatever nested stuff comes inside this component when mounted, like {error} in HomeScreen.js where this exists
  return <Alert variant={variant}>{children}</Alert>;
};

// default props incase any props are missing
Message.defaultProps = {
  variant: 'info',
};

export default Message;
