import React from 'react';

//import the video item to render in this list
import VideoItem from './VideoItem';

//destructure the props: this is a good practice for props (and destructuring in general is good for both obj. and array)
const VideoList = ({videos, onVideoSelect}) => {
  //create a list of video components passing a video objext as prop (the object contains vid title, etc)
  const videoList = videos.map (video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });

  return (
    //class here is a semantic ui class for styling a list cleanly
    (
      <div className="ui relaxed divided list">
        {videoList}
      </div>
    )
  );
};

//must default export
export default VideoList;
