import jsonPlaceholder from '../API/jsonPlaceholder'; //import the instance of axios we made in api folder

import _ from 'lodash'; //for memoization of network requests

//fetch post action creator: utilizes redux-thunk for the async request [because it makes request, we must return a function that takes dispatch and getstate]
//(we can negate the get state param) es6 way of writing function that returns a function: async action creators have to be done like this (or th elong way but this is encouraged)
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get ('/posts');
  dispatch ({type: 'FETCH_POSTS', payload: response.data});
};

/**
 * Remember: we define the action type! The actions are what ewe define and the type is like a signature for our reducer to look at to do some
 * decision making and logic!!!! If the reducer does not see the action type it wants to change state, it ignore it
 * 
 * I was having trouble understanding this but i get it now! TYPE IS DEFINED BY THE ENGINEER! Depending on the actions (events fired to produce some result for us)
 * we can return an action to take! For the reducer to see and function off of!!!
 */

//actioon creator to fetch one user at a time from the users route by their id (this is async, so use redux-thunk)
//the fetchPosts contains post data with an ID for a user, but not the users header (name, etc) so we make a second action here
//to fetch users that we can match to posts (See videos for design and idea)
export const fetchUser = id => dispatch => _fetchUser (id, dispatch);

//these two functions are the correct way to memoize fetching data that would be x long (like 10 posts per person, and we have
//10 people, we'd make 100 requests. this allows us to get all posts per user by their id in one fetch! And then when we map that state
// to the props of the users header  (shows user name) we will decrease 100 requests to 10 !)

//this is a private function: identified with _
const _fetchUser = _.memoize (async (id, dispatch) => {
  const response = await jsonPlaceholder.get (`/users/${id}`);
  dispatch ({
    //rememebr we need to explicitely call the dispatcher sending it our action as this is a step critical to resolving async action creator issues
    type: 'FETCH_USER',
    payload: response.data,
  });
});

//process the request for fetching all posts : notice the get -> configured the url instance in api so we can make the get only the route of the data
//we want for this particular action!
//Also, we cannot return actions that depend on async actions because es2015 is what babel transpiles down to and when async actions are transpiled
// it actually returns an object that is not plain. It is a request object. NOT ALLOWED! this is what we use redux-thunk for (interview potential question)

//actions are consumed so fast in redux/react that our request takes longer! So, we end up returning a request object because this happens instantly
//so before somethings returned, redux just sees response as an async object that did nothing! This why it is a problem

//in order to use async actions, we need to use redux thunk basically this means that we need to actually return an
//async function that takes in dispatch and getState and then we can await our normal request... only after that, though
//we must explicitely call dispatch and pass it the action we want to return as dispatch(), as we know, takes an action
//and sends it off to our reducers implicitely in sync actions but with async, redux thuink requires the syntax/ idea we see in the action creator above

/**
 * 
 * In the network tab we can see that for every user being rendered, we make x user amount of requests! This is a waste of time! So, in order
 * to kill some overhead, we can use lodashes 'memoization' function to run a request once, remember the previous result and do not process
 * a new request uNTIL a new user ID is seen! This is used for unique renders we needs
 */
