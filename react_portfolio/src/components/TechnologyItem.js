import React from 'react';
import Fade from 'react-reveal/Fade';

const TechnologyItem = ({ icon }) => {
  return (
    <Fade right>
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
    </Fade>
  );
};

export default TechnologyItem;
