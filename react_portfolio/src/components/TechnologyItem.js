import React from 'react';
import Fade from 'react-reveal/Fade';

const TechnologyItem = ({ icon }) => {
  const iconColorMap = {
    js: 'rgb(247,166,18)',
    react: 'rgb(97,218,251)',
    node: 'rgb(119,181,92)',
    html5: 'rgb(228,77,38)',
    css3: 'rgb(40,98,233)',
    java: 'rgb(249,151,26)',
    python: 'rgb(62,128,158)',
    'data structures and algorithms': '#52057b',
  };
  return (
    <Fade right>
      <i
        className={icon.className}
        style={{ color: iconColorMap[icon.technology] }}
        data-technology={icon.technology}
      ></i>
    </Fade>
  );
};

export default TechnologyItem;
