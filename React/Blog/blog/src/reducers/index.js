import {combineReducers} from 'redux'; //must import: used to combine reducers to pass to store

const tester = () => {
  return {
    type: 'ignore',
    payload: 'boilerplate',
  };
};

//must combine reducers for redux store
export default combineReducers ({
  test: tester,
});
