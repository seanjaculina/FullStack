import React from 'react';

//static file css:
import '../static/styles/VideoItem.css';

//desturcture the video object we receive and the select callback
const VideoItem = ({video, onVideoSelect}) => {
  //grabbing the video titlw and thumbnail through the destructured prop variable
  const title = video.snippet.title; //video title
  const thumbnail = video.snippet.thumbnails.medium.url; //video thumbnail url (for the src of our image to be put into the card)

  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoSelect(video);
        //call the callback from app (passed all the way down
        //to get the video the user pressed (which is a div which represents this component!))
      }}
    >
      <img src={thumbnail} className="ui image" alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};
export default VideoItem;

/**
 * To understand this onclick callpback which is nested through the components
 * passed down here, see the video 126 in the react course
 */
