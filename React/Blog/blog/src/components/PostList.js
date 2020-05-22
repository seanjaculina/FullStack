import React, {Component} from 'react';

//needed to communicate with the provider to send state to all components: alwaus goes in every component so we can connect to state!!
import {connect} from 'react-redux';

//actions import
import {fetchPosts} from '../actions';

class PostList extends Component {
  //get all posts: rememebr componentdidmoint is good for placing api request actions and data because this function is called before anything
  //is ran or messed with in its component
  componentDidMount () {
    this.props.fetchPosts ();
  }

  render () {
    return <div>Hello</div>;
  }
}

//should take in the actions as connect dirfectly connects to actions (see diagram in notes) AND we know connect returns a function:
//this function takes in the component so it can process things for us to turn our state from the store into props! Super cool
export default connect (null, {fetchPosts}) (PostList);
