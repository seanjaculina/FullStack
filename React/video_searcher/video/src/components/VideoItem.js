import React, {Component} from 'react'

//static file css:
import '../static/styles/VideoItem.css';

class VideoItem extends Component{
    constructor({video}){
        super({video});

        //making instance variables for the class to organize the data better
        this.title = video.snippet.title;                               //video title
        this.thumbnail = video.snippet.thumbnails.medium.url;           //video thumbnail url (for the src of our image to be put into the card)

        this.state={}
    }

    render(){
        return(
            //make the whole list item clickable to open! So, encase it all in an anchor
            <a>
                {/*semantic ui class for a list item*/}
                <div className="video-item item">
                    <img src={this.thumbnail} className="ui image" alt={this.title}/>
                    <div className="content">
                        <div className="header">{this.title}</div>
                    </div>
                </div>
            </a>
        )
    }
}

export default VideoItem;
