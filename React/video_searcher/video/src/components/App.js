import React, { Component } from "react";

//component imports
import SearchBar from "./SearchBar";

//styles
import "../App.css";

//api: holds our axios instance to send a request [we will use a callback in app, and call it with the term in the seach bar component]
import youtube from '../api/youtube'

//config api key file
import {key} from '../config'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos:[]
    };

    //bind our events
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //gets the search term from state in SearchBar and returns that search term back up to this component via this callback being passed as props and called there
  //and submits a request to youtube api : the search path is specific! Youtube wants us to use that and then the object query must be called q
  //rememebr axios is an asyn lib, so use async/await
  onFormSubmit = async(term) => {
      //await the response
      const result = await youtube.get('/search',{
        //query params
        params : {
          q:term,
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          key: key,
        }
      })
      //rest the state: assign the videos array the returned result data property which has a video property which is an array!
      this.setState({
        videos : result.data.items
      })

      console.log(this.state.videos)
  }

  render() {
    return (
      <div className="ui container">
      {/*pass the ontermsubmut method as prop down to searchbar to be called passing it the search string the user types:
      remember: we used state to keep track of their input in that component, so whenever we call this callback, it will ensure
      it got the most recent submission
      By convention our propname should match the callback we pass it , or whatever else like a var*/}
        <SearchBar onFormSubmit={this.onFormSubmit}/>
        Videos Found: {this.state.videos.length}
      </div>
    );
  }
}

export default App;
