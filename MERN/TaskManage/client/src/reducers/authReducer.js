import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../actions/types';

/**
 * Initial state will be the token in local storage, if it exists.
 * If they are authenticated. if it is loading and then the user (for profile UI stuff)
 */
const initialState = {
  token: localStorage.getItem('token'), // see if there is a token in localStorage
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload, // contains the token and user information
      };
    case USER_UPDATE_SUCCESS:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload, // holds token (userID) and the user (remember that is what we send back from the backend)
        isAuthenticated: true,
        isLoading: false,
      };
    // all the following cases do the same: remove the token and all auth stuff
    case AUTH_ERROR:
    case USER_UPDATE_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token'); // REMOVE TOKEN
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
