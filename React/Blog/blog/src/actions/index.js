import jsonPlaceholder from '../API/jsonPlaceholder';

//fetch post action creator: utilizes redux-thunk for the async request [because it makes request, we must return a function that takes dispatch and getstate]
//es6 way of writing function that returns a function: async action creators have to be done like this (or th elong way but this is encouraged)
export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get ('/posts');
  dispatch ({
    type: 'FETCH_POSTS',
    payload: response,
  });
};

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
