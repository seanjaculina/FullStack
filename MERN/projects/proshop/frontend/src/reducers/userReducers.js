import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
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

export const userRegisterReducer = (state = {}, action) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true, //set loading state when the action is seen here
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload, // this will contain the data from the API request to our backend
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  // determine the action type (the action to do something to this state)
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true, //set loading state when the action is seen here
      };
    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload, // this will contain the data from the API request to our backend
      };
    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload, // remember the payload is from the action creator which actually got the data from the API and such for an action that was fired in the UI.
        // the reducer simply updates the state by not mutating it but copying old state, setting other state for loading for spinners, etc.
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_PROFILE_RESET:
      return {}; // clean out the user data currently in state if thios action is fired off and dispatched to this reducer
    default:
      return state;
  }
};
