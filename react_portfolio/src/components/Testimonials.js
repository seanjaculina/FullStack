import React from 'react';
import Fade from 'react-reveal/Fade';

import TestimonialItem from './TestimonialItem';

import recs from '../recs.json';

const Testimonials = () => {
  return (
    <Fade>
      <div className="section_container" id="testimonials">
        <h1 className="section__heading">Testimonials</h1>
        <div className="recommendation_container">
          {recs.map((rec) => (
            <TestimonialItem data={rec} />
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Testimonials;
