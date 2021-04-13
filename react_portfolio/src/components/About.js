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
            Hi there! My name is Tanner and I am a Computer Science graduate
            from CSU East Bay in Hayward, CA. My degree was focused around
            Full-Stack Software Engineering and on the side, I self taught
            myself Product Design. I have a passion for designing and creating
            wonderful applications that provide purpose and meaning in users
            lives. Below are some of the skills and technologies I know.
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
