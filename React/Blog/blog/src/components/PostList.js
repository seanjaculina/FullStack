import React, {Component} from 'react';

//needed to communicate with the provider to send state to all components: alwaus goes in every component so we can connect to state!!
import {connect} from 'react-redux';

//actions import: every component should import the actions as we a: want to of course invoke an acrtion with an event to do something with
//state but b: we need to pass the action to the connect method so we even have proper access to the provider and global state as
//an action invokes state change and reducers to return state to us
import {fetchPosts} from '../actions';

//needed component imports
import UserHeader from './UserHeader';

class PostList extends Component {
  //get all posts: rememebr componentdidmoint is good for placing api request actions and data because this function is called before anything
  //is ran or messed with in its component
  componentDidMount () {
    this.props.fetchPosts ();
  }

  //render the lists showing the post title and body: we can do logic outside out render with functions, and then call the method in the redner! This
  //is basic react
  renderList () {
    return this.props.posts.map (post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            {/*this component takes in the users id to fetch their information: it corresponds directly 
            to the post object we are mapping and looking at! REMEMBER: in the video, he showed that this api actually
            separates the users and the posts, nbut they are displayed in order by their id's so they will match: our only task 
            is to grab both endpoints, and basically link the data together by making an action and a reducer for getting that users
            endpoint, and then fetching the data in the header , and giving it props locally of the id of this post
            but then actually working with the mapstate method to get the post from the actual async method*/}
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      //call the render list method to show all the lists
      (
        <div className="ui relaxed divided list">
          {this.renderList ()}
        </div>
      )
    );
  }
}

//remember to get state into our components when using redux, we need the mapStateToProps(stateObject)
const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

//should take in the mapstatetoprops and actions as connect dirfectly connects to actions (see diagram in notes) AND we know connect returns a function:
//this function takes in the component so it can process things for us to turn our state from the store into props! Super cool
export default connect (mapStateToProps, {fetchPosts}) (PostList);
