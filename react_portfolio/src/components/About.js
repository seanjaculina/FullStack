import React from 'react';
import TechnologyItem from './TechnologyItem';

import Me from '../images/me.jpg';

import iconArray from '../icon_factory';

const About = () => {
  return (
    <div className="section_container" id="about">
      <div className="about">
        <h1 className="section__heading">About me</h1>
        <div className="section__content">
          <img alt="profile" src={Me} style={{ borderRadius: '50%' }} />
          <p>
            My name is Tanner and I am a rising senior at CSU East Bay in
            Hayward graduating this coming May. I have an interest in full stack
            development and am interested in Frontend/Fullstack engineering
            roles. See some of my technical skills below!
          </p>
          <div className="technologies_container">
            {iconArray.map((icon, i) => (
              <TechnologyItem key={i} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
