import React from 'react';
import TechnologyItem from './TechnologyItem';

import Fade from 'react-reveal/Fade'; // fade in effect

import Me from '../images/me.jpg';

const About = () => {

  const iconArray = [
    {"className":"fab fa-js" ,"technology":"js"},
    {"className":"fab fa-react" ,"technology":"react"},
    {"className":"fab fa-node" ,"technology":"node"},
    {"className":"fab fa-html5" ,"technology":"html5"},
    {"className":"fab fa-css3-alt" ,"technology":"css3"},
    {"className":"fab fa-java" ,"technology":"java"},
    {"className":"fab fa-python" ,"technology":"python"},
    {"className":"fas fa-project-diagram" ,"technology":"data structures and algorithms"}
  ];

  return (
    <Fade>
      <div className="section_container">
        <div className="about">
          <h1 className="section__heading">About me</h1>
          <div className="section__content">
            <img alt="profile" src={Me}/>
            <p>My name is Tanner and I am a rising senior at CSU East Bay in Hayward graduating this coming May.
            I have an interest in full stack development and am interested in Frontend/Fullstack engineering roles. 
            See some of my technical skills below!</p>
            <div className="technologies_container">
              {
                iconArray.map((icon,i) => <TechnologyItem key={i} icon={icon}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default About;
