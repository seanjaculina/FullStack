import React from 'react';
import { Spinner } from 'reactstrap';
const LoadingSpinner = () => {
  return (
    <Spinner
      color="primary"
      style={{
        width: '100px',
        height: '100px',
        position: 'absolute',
        left: '45%',
        top: '45%',
      }}
    ></Spinner>
  );
};

export default LoadingSpinner;
