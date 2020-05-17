import React, {Component} from 'react';

//static file css:
import '../static/styles/VideoItem.css';

class VideoItem extends Component {
  constructor({video, onVideoSelect}) {
    super({video, onVideoSelect});

    //making instance variables for the class to organize the data better
    this.title = video.snippet.title; //video title
    this.thumbnail = video.snippet.thumbnails.medium.url; //video thumbnail url (for the src of our image to be put into the card)

    this.state = {};
  }

  render() {
    return (
      <div className="video-item item">
        <img src={this.thumbnail} className="ui image" alt={this.title} />
        <div className="content">
          <div className="header">{this.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
