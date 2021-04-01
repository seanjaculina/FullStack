import React from 'react';

//import the video item to render in this list
import VideoItem from './VideoItem';

//destructure the props: this is a good practice for props (and destructuring in general is good for both obj. and array)
//onVideoSelect is a callback to be invoked in the video item component: simply destructure it and pass it down yet againa as a prop
const VideoList = ({videos, onVideoSelect}) => {
  //create a list of video components passing a video objext as prop (the object contains vid title, etc)
  const videoList = videos.map (video => {
    return (
      //must have key prop for mapped out list elements
      (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      )
    );
  });

  return (
    //class here is a semantic ui class for styling a list cleanly
    (
      <div className="ui relaxed divided list scrollOnlyDefault">
        {videoList}
      </div>
    )
  );
};

export default VideoList;
