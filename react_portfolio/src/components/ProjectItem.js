import React from 'react';

// Image imports locally to be parsed from JSON and in our own custom object
import coffee_connection from '../images/coffee_connection.png';
import youtube from "../images/youtube.png";
import movie_app from "../images/movie_app.png";
import covid from "../images/covid.png";
import ebay from "../images/ebay.png";
import stream from "../images/stream.png";
import baysbookland from "../images/baysbookland.jpg";
import weather from "../images/weather.png";

const imgMap = {
  "coffee_connection": coffee_connection,
  "youtube":youtube,
  "movie_app": movie_app,
  "covid": covid,
  "ebay": ebay,
  "stream": stream,
  "baysbookland": baysbookland,
  "weather": weather
}

const ProjectItem = ({data}) => {
  return (
    <div className="project-item card">
      <h3>{data.title}</h3>
      <img alt={data.title} src={imgMap[data.image]}/>
      <a className="btn" href={data.link} target="_blank" rel="noreferrer">{data.btnText}</a>
    </div>
  )
}

export default ProjectItem;
