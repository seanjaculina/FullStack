import React, {Component} from 'react';

//component imports
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//styles
import '../App.css';

//api: holds our axios instance to send a request [we will use a callback in app, and call it with the term in the seach bar component]
import youtube from '../api/youtube';

//import config file that exports our env vars globally (using a config file is a way to keep my architecture structured [could easily just call process.emv.api.... etc])
import envVars from '../config';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      videos: [],
      selectedVideo: null,
      /*Explanation of selected video state:

          this piece of state will hold the current video selected to be displayed. The way we handle this is as followed:

            - we will make a method in the app component called onVideoSelect() which will be a callback that is invoked in the video item 
            - we will pass this callback as reference, down as a prop to the video list, in which video list will pass that as a prop to the video item
            - once at the item, we can invoke that method as we learned in earlier projects to pass the selected video title (or whatever makes most sense 
            into that callback argument, in which that will then invoke the method, and it will fire off here in app
            - once fired off, we will be able to actually determine which video to display in the detail component

      */
    };

    //bind our events
    this.onFormSubmit = this.onFormSubmit.bind (this);
  }

  //component did mount lifecycle method: loads before anything else! So, we actually
  //give the form input a default submission to have some videos exist initially
  componentDidMount () {
    this.onFormSubmit ('');
  }

  //callback which is passed to the search bar component, searchbar handles its own state for the characters enetered. Once user
  //enters their search, we can invoke this callback with an onsubmit event passing the state of text user entered
  //as the argument. That argument represents term here. The term is added to our axios ajax request
  //along with all the required params to get the list of videos (of N max results) and we store that async request
  //ina  variable that is the state for this comp-onent: an array of videos. Those videos are then passed as prop to the list
  //this is weird to think asbout at first, but this is the architecture of react and how it runs: study this, and understand what is
  //going on when reading these comments
  onFormSubmit = async term => {
    //await the response: we want app to handle the data and use it as a super-component which can pass it all down to children after the search query is called and sent back
    const result = await youtube.get ('/search', {
      //query params
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 30, //max is 50 for free tier
        key: envVars.key,
      },
    });
    //rest the state: assign the videos array the returned result data property which has a video property which is an array!
    this.setState ({
      videos: result.data.items,
      selectedVideo: result.data.items[0], // <- assigns a default displayed video to the first video returned from our request
    });

    console.log (this.state.videos);
  };

  //will get the selected video item : passed as a callback prop all the way down to video item component
  //which has an onclick method on it which elegantly will be able to see that that item was clicked,
  //thus, we pass that video into the argument and call it! So cool.
  onVideoSelect = video => {
    console.log ('Selected in Video Item but called from app!', video);

    //set the state of the video the user selected so app can keep track of the video a user pressed
    //remember: this method is a callback sent down all the way to the video item which has a title as its a component with
    //an object of the youtube query in it: we invoke this fucntion with the onclick on the div the video is in, and grasp the title
    //and send it as an argument
    this.setState ({
      selectedVideo: video,
    });
  };

  render () {
    return (
      <div className="ui container">
        {/*pass the ontsermsubmut method as prop down to searchbar to be called passing it the search string the user types:
      remember: we used state to keep track of their input in that component, so whenever we call this callback, it will ensure
      it got the most recent submission
      By convention our propname should match the callback we pass it , or whatever else like a var*/}
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/*passing the videos list returned from AJAX and a callback to determine selected video to alter state*/}
              <VideoList
                //pass all the videos returned form our call down to the lsit component to map out list item components
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
