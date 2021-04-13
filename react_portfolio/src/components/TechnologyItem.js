import React from 'react';

const TechnologyItem = ({ icon }) => {
  return (
    <img
      src={icon.path}
      alt={`${icon.name}`}
      style={{
        width: '180px',
        height: '200px',
        padding: '1rem',
        objectFit: 'contain',
      }}
    />
  );
};

export default TechnologyItem;
