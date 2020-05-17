import React from 'react';

//destructure the video prop passed here [which contains an object of the selected video we implemented logic for]
const VideoDetail = ({video}) => {
  //we have to wait for the user to press a video, so, if we do not check for a null video
  //which is whats passed as the value UNTIL a press, we will get an error SO
  //we can handle that with a simple check for null video
  if (!video) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  //get the full video url for the ifram to request: use the default youtube required embed route, and then
  //attach the videos id that a user clicked, here
  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      {/*semantic ui embed player css and using an iframe (for embedded media)*/}
      <div className="ui embed">
        {/*iframe takes in a url to request from: in our case https://www.youtube.com/embed/ and then add on the distinct id of this image*/}
        <iframe title="video player" src={videoSource} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
