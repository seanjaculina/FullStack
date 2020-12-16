import React from 'react';
import Fade from 'react-reveal/Fade';

import RecommendationItem from './RecommendationItem';

import recs from '../recs.json';

const Recommendations = () => {
  return (
    <Fade>
      <div className="section_container" id="recommendations">
        <h1 className="section__heading">Recommendations</h1>
        <div className="recommendation_container">
          {recs.map((rec) => (
            <RecommendationItem data={rec} />
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Recommendations;
