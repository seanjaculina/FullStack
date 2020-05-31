import React, {Component} from 'react';

//connect component to connect method
import {connect} from 'react-redux';

//actions import
import {fetchUser} from '../actions';

//componnet to show th eusers header : name etc. tied to the posts (which exist in a different endpoint)
class UserHeader extends Component {
  componentDidMount () {
    //the action to fetch all the users: userId passed as props from when we mounted this component in PostList in the render there
    //so its basically getting the result of the map there and the data returned from that endpoint of posts, and then for every post we are mapping
    //we actually know that the user is adjacent to that post, in order, with their id (just at different routes)
    this.props.fetchUser (this.props.userId);
  }

  render () {
    //get the name for the user
    const {user} = this.props;

    //initial render , we will have no data received, so, check for no user
    if (!user) {
      return null;
    }

    //esle, we have a user from the post
    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

//to give state to this component: its the array of users that we gave all its data to from the async fetch and then getting it
//its good to map state and put logix for the state needed for a component right in the mapstatetoprops method
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users.find (user => user.id === ownProps.userId),
  };
};

//get the user based off the users we get from props and return it: .find() returns the data in an array based off a condition we
//wish to use to find that value

//connect takes in mapstatetoprops and the actions and called this component
export default connect (mapStateToProps, {fetchUser}) (UserHeader);
