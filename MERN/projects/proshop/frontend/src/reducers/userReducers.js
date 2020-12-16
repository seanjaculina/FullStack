import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './actionTypes';

export const userLoginReducer = (state = {}, action) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true, //set loading state when the action is seen here
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload, // this will contain the data from the API request to our backend
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {}; // just set the object that exists for all user info to null
    default:
      return state;
  }
};
