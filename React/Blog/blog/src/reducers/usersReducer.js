//will receive the action to fetch a user from the post list component and check if we are getting the posts user (id passed as props in that )
//or just return the state
export default (state = [], action) => {
  switch (action) {
    case action.type === 'FETCH_USER':
      return [...state, action.payload]; //adds user to the state of users list
    default:
      return state;
  }
};
