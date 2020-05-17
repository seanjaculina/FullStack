import React, {Component} from 'react';

//component imports
import SearchBar from './SearchBar';
import VideoList from './VideoList';

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

  //gets the search term from state in SearchBar and returns that search term back up to this component via this callback being passed as props and called there
  //and submits a request to youtube api : the search path is specific! Youtube wants us to use that and then the object query must be called q
  //rememebr axios is an asyn lib, so use async/await
  onFormSubmit = async term => {
    //await the response: we want app to handle the data and use it as a super-component which can pass it all down to children after the search query is called and sent back
    const result = await youtube.get ('/search', {
      //query params
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: envVars.key,
      },
    });
    //rest the state: assign the videos array the returned result data property which has a video property which is an array!
    this.setState ({
      videos: result.data.items,
    });

    console.log (this.state.videos);
  };

  //callback method being passed as prop down all the way to a video item
  onVideoSelect = video => {
    console.log ('From the app', video);
  };

  render () {
    return (
      <div className="ui container">
        {/*pass the ontermsubmut method as prop down to searchbar to be called passing it the search string the user types:
      remember: we used state to keep track of their input in that component, so whenever we call this callback, it will ensure
      it got the most recent submission
      By convention our propname should match the callback we pass it , or whatever else like a var*/}
        <SearchBar onFormSubmit={this.onFormSubmit} />
        {/*passing the videos list returned from AJAX and a callback to determine selected video to alter state*/}
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
