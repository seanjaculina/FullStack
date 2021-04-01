//reducer to take in the posts

//the initial list of posts of course is null before a request is fired! Therefore, the default state for the list of posts is empty
//use this same idea for a shopping cart app
export default (state = [], action) => {
  //switch to determine action
  switch (action.type) {
    //check if the action is to fetch the posts (for shopping cart : would be FETCH_CART, etc.
    case 'FETCH_POSTS':
      return action.payload; //the payload is the state which is an array of posts! reducers handle state and return it so when we mapstate toprops, we map exactly what state we make and handl with reducers
    //default case is return normal unchanged state
    default:
      return state;
  }
};

//its okay to use if statement but a switch statement is more encouraged!
